import { ComponentStore } from "@ngrx/component-store";
import { RunState } from "./run.state";
import { DestroyRef, Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { distinctUntilChanged, map, switchMap } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { Store } from "@ngrx/store";
import { appFeature } from "src/app/redux/app-feature/app.feature";

@Injectable()
export class RunStore extends ComponentStore<RunState> {
    constructor(
        private route: ActivatedRoute, 
        private store: Store
    ) {
        super({
            questions: [], 
            answers: []
        });

        route.params.pipe(
            map(prm => String(prm['quizId'])), 
            distinctUntilChanged(), 
            switchMap(id => this.store.select(appFeature.selectQuizQuestionsById(id))),
            takeUntilDestroyed()
        ).subscribe(questions => this.setState({
            answers: [], 
            questions
        }))
    }

    selectCurrentQuestionIndex$ = this.select(this.state$, state => state.answers.length);
    selectAllQuestions$ = this.select(this.state$, state => state.questions);
    selectCurrentQuestion$ = this.select(this.selectCurrentQuestionIndex$, this.selectAllQuestions$, 
        (index, all) => all[index]);

    readonly answerCurrentQuestion = this.updater((state, index: number)=> ({
        ...state, 
        answers: [...state.answers, index]
    }))
}