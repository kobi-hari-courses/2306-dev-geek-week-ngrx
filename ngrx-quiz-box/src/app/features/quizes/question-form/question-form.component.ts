import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialModules } from 'src/app/shared/material-modules';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-question-form',
  standalone: true,
  imports: [CommonModule, materialModules],
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent {
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  options = ['Achat', 'Shtaim', 'Shalosh'];

  add(ev: MatChipInputEvent){
    if (ev.value) {
      this.options.push(ev.value);
    }
    ev.chipInput!.clear();
  }

  remove(val: string) {
    this.options = this.options.filter(item => item !== val);
  }
}
