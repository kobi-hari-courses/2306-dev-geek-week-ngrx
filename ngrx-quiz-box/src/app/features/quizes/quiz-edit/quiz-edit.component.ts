import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, mergeMap, of, switchMap } from 'rxjs';
import { SAMPLE_QUIZES } from 'src/app/sample_data/quizes';
import { QuestionCardComponent } from '../question-card/question-card.component';
import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { materialModules } from 'src/app/shared/material-modules';
import { QuestionFormComponent } from "../question-form/question-form.component";
import { QuestionsSourceComponent } from '../questions-source/questions-source.component';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { appFeature } from 'src/app/redux/app-feature/app.feature';

@Component({
    selector: 'app-quiz-edit',
    standalone: true,
    templateUrl: './quiz-edit.component.html',
    styleUrls: ['./quiz-edit.component.scss'],
    imports: [CommonModule, QuestionCardComponent, materialModules, QuestionFormComponent, QuestionsSourceComponent]
})
export class QuizEditComponent {
  constructor(
    private store: Store, 
    private route: ActivatedRoute){}

  id$ = this.route.params.pipe(
    map(prms => String(prms['id']))
  );

  name$ = this.id$.pipe(
    switchMap(id => this.store.select(appFeature.selectQuizNameById(id)))
  );


  questions$ = this.id$.pipe(
    switchMap(id => this.store.select(appFeature.selectQuizQuestionsById(id)))
  );


  catalog$ = this.store.select(appFeature.selectAllQuestions);

  onDrop(ev: CdkDragDrop<any>) {
    console.group('Item Dropped');
    console.log(ev);
    console.log('containers are the same: ', ev.previousContainer === ev.container);
    console.log('source data', ev.previousContainer.data[ev.previousIndex]);
    console.groupEnd();
    
  }
  
}
