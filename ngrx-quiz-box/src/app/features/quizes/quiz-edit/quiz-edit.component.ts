import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { SAMPLE_QUIZES } from 'src/app/sample_data/quizes';
import { QuestionCardComponent } from '../question-card/question-card.component';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { materialModules } from 'src/app/shared/material-modules';

@Component({
  selector: 'app-quiz-edit',
  standalone: true,
  imports: [CommonModule, QuestionCardComponent, materialModules],
  templateUrl: './quiz-edit.component.html',
  styleUrls: ['./quiz-edit.component.scss']
})
export class QuizEditComponent {
  name$ = of(SAMPLE_QUIZES[0].caption);
  questions$ = of(SAMPLE_QUIZES[0].questions);

}
