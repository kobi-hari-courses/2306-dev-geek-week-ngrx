import { inject } from '@angular/core';
import {
  Actions,
  ROOT_EFFECTS_INIT,
  createEffect,
  ofType,
} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { exhaustMap, filter, interval, map, mergeMap, skip, tap } from 'rxjs';
import { appFeature } from './app.feature';
import { appActions } from '../actions/app.actions';
import { AppState } from './app.state';
import { quizActions } from '../actions/quiz.actions';
import { QuestionsGeneratorService } from 'src/app/services/questions-generator.service';
import { serviceActions } from '../actions/service.actions';
import { DialogsService } from 'src/app/services/dialogs.service';

export const saveToStorage = createEffect(
  (store: Store = inject(Store)) =>
    store
      .select(appFeature.selectAppState)
      .pipe(
        skip(1),
        tap((state) =>
          localStorage.setItem(appFeature.name, JSON.stringify(state))
        )
      ),
  { functional: true, dispatch: false }
);

export const loadFromStorage = createEffect(
  (actions = inject(Actions)) =>
    actions.pipe(
      ofType(ROOT_EFFECTS_INIT),
      map((_) =>
        appActions.reset({
          state: JSON.parse(
            localStorage.getItem(appFeature.name) ?? 'null'
          ) as AppState | null,
        })
      )
    ),
  { functional: true }
);


export const generateQuestion = createEffect(
  (actions = inject(Actions), service = inject(QuestionsGeneratorService)) => {
    const res = actions.pipe(
      ofType(quizActions.generateNewQuestion), 
      mergeMap(action => service
          .generate(action.questionType).pipe(
            map(question => serviceActions.questionGeneratedSuccessfully({question, quizId: action.quizId})
          ))));

    return res;
  },{ functional: true}
);

export const openCreateNewQuizDialog = createEffect(
  (actions = inject(Actions), service = inject(DialogsService)) => {
    const res = actions.pipe(
      ofType(appActions.startCreateNewQuiz), 
      exhaustMap(_ => service.openNewQuizDialog()), 
      filter(q => q !== null), 
      map(q => appActions.addNewQuiz({quiz: q!}))
    );

    return res;
  }, {functional: true}
);
