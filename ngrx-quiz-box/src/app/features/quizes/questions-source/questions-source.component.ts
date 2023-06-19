import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from 'src/app/models/question.model';
import { materialModules } from 'src/app/shared/material-modules';
import { CdkDropList } from '@angular/cdk/drag-drop';
import { QuestionCardComponent } from '../question-card/question-card.component';

@Component({
  selector: 'app-questions-source',
  standalone: true,
  imports: [CommonModule, materialModules, QuestionCardComponent],
  templateUrl: './questions-source.component.html',
  styleUrls: ['./questions-source.component.scss']
})
export class QuestionsSourceComponent {
  @Input({required: true})
  questions!: Question[];

  @Input({required: true})
  targetList!: CdkDropList<any>;



}
