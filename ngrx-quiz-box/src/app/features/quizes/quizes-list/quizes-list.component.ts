import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SAMPLE_QUIZES } from 'src/app/sample_data/quizes';
import { of } from 'rxjs';
import { QuizCardComponent } from '../quiz-card/quiz-card.component';

@Component({
  selector: 'app-quizes-list',
  standalone: true,
  imports: [CommonModule, QuizCardComponent],
  templateUrl: './quizes-list.component.html',
  styleUrls: ['./quizes-list.component.scss']
})
export class QuizesListComponent {
  quizes$ = of(SAMPLE_QUIZES);

}
