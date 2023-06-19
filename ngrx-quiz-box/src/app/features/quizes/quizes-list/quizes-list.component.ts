import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizCardComponent } from '../quiz-card/quiz-card.component';
import { Store } from '@ngrx/store';
import { appFeature } from 'src/app/redux/app-feature/app.feature';

@Component({
  selector: 'app-quizes-list',
  standalone: true,
  imports: [CommonModule, QuizCardComponent],
  templateUrl: './quizes-list.component.html',
  styleUrls: ['./quizes-list.component.scss']
})
export class QuizesListComponent {
  constructor(private store: Store){}

  quizes$ = this.store.select(appFeature.selectQuizes);
  count$ = this.store.select(appFeature.selectQuizesCount);

}
