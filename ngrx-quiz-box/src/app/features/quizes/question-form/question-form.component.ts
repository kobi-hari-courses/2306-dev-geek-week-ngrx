import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialModules } from 'src/app/shared/material-modules';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Question } from 'src/app/models/question.model';

@Component({
  selector: 'app-question-form',
  standalone: true,
  imports: [CommonModule, materialModules, ReactiveFormsModule],
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent {
  form = new FormGroup({
    caption: new FormControl<string>('' ,Validators.required), 
    selected: new FormControl<string | null>(null, Validators.required)
  })

  options: string[] = [];

  @Output()
  submitted = new EventEmitter<Question>();

  answerKeyDown(ev: KeyboardEvent){
    if ((ev.code === 'Enter') || (ev.code === 'Comma')) {
      const target = ev.target as HTMLInputElement;
      this.commitOption(target);

      ev.preventDefault();
    }
  }

  blur(ev: FocusEvent) {
    const target = ev.target as HTMLInputElement;
    this.commitOption(target);
  }

  commitOption(target: HTMLInputElement) {
    const contains = this.options.some(v => v.toLowerCase() === target.value.toLowerCase());
    const value = target.value.trim();

    if ((value) && (!contains)) {
      this.options.push(target.value);
    }
    target.value = '';

  }

  remove(index: number) {
    console.log('removing', index);
    const ctrl = this.form.controls['selected'];
    const value = ctrl.value;
    
    this.options.splice(index, 1);

    if (value) {
      const contains = this.options.some(v => value === v);
      if (!contains) {
        ctrl.reset();
      }
    }
  }

  submit() {
    const formVal = this.form.getRawValue();
    const question: Question = {
      caption: formVal.caption!, 
      answers: [...this.options], 
      correctAnswer: this.options.indexOf(formVal.selected!)
    }

    this.submitted.emit(question);
    this.form.reset();
    this.options = [];
  }
}
