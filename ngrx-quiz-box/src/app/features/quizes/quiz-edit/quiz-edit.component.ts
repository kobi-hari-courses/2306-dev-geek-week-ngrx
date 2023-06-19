import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { SAMPLE_QUIZES } from 'src/app/sample_data/quizes';
import { QuestionCardComponent } from '../question-card/question-card.component';
import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { materialModules } from 'src/app/shared/material-modules';
import { QuestionFormComponent } from "../question-form/question-form.component";
import { QuestionsSourceComponent } from '../questions-source/questions-source.component';

@Component({
    selector: 'app-quiz-edit',
    standalone: true,
    templateUrl: './quiz-edit.component.html',
    styleUrls: ['./quiz-edit.component.scss'],
    imports: [CommonModule, QuestionCardComponent, materialModules, QuestionFormComponent, QuestionsSourceComponent]
})
export class QuizEditComponent {
  name$ = of(SAMPLE_QUIZES[0].caption);
  questions$ = of(SAMPLE_QUIZES[0].questions);

  catalog$ = of([...SAMPLE_QUIZES[0].questions, ...SAMPLE_QUIZES[1].questions, ...SAMPLE_QUIZES[2].questions]);


  onDrop(ev: CdkDragDrop<any>) {
    console.group('Item Dropped');
    console.log(ev);
    console.log('containers are the same: ', ev.previousContainer === ev.container);
    console.log('source data', ev.previousContainer.data[ev.previousIndex]);
    console.groupEnd();
    
  }
  
}
