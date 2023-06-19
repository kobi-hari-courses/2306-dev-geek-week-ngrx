import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from 'src/app/models/question.model';
import { materialModules } from 'src/app/shared/material-modules';

@Component({
  selector: 'app-question-card',
  standalone: true,
  imports: [CommonModule, materialModules],
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent {
  @Input()
  index?: number;

  @Input()
  minimized = false;

  @Input({required: true})
  question!: Question;

}
