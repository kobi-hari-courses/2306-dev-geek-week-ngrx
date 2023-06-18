import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { SAMPLE_QUIZES } from 'src/app/sample_data/quizes';
import { QuestionCardComponent } from '../question-card/question-card.component';

@Component({
  selector: 'app-quiz-edit',
  standalone: true,
  imports: [CommonModule, QuestionCardComponent],
  templateUrl: './quiz-edit.component.html',
  styleUrls: ['./quiz-edit.component.scss']
})
export class QuizEditComponent {
  questions$ = of(SAMPLE_QUIZES[0].questions);

}
