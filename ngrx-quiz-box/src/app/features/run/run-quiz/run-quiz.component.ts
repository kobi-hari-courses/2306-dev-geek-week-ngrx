import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunStore } from '../store/run.store';

@Component({
  selector: 'app-run-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './run-quiz.component.html',
  styleUrls: ['./run-quiz.component.scss'], 
  providers: [RunStore]
})
export class RunQuizComponent {
  constructor(
    private store: RunStore, 
    ){}

  question$ = this.store.selectCurrentQuestion$;

  onAnswer(index: number) {
    this.store.answerCurrentQuestion(index);
  }

}
