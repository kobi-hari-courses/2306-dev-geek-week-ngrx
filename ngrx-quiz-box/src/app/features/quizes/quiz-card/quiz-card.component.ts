import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Quiz } from 'src/app/models/quiz.model';
import { materialModules } from 'src/app/shared/material-modules';

@Component({
  selector: 'app-quiz-card',
  standalone: true,
  imports: [CommonModule, materialModules],
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent {
  @Input({required: true})
  quiz!: Quiz;

}
