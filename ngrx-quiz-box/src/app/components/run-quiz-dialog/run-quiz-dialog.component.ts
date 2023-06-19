import { MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { materialModules } from 'src/app/shared/material-modules';

@Component({
  selector: 'app-run-quiz-dialog',
  standalone: true,
  imports: [CommonModule, materialModules, ReactiveFormsModule],
  templateUrl: './run-quiz-dialog.component.html',
  styleUrls: ['./run-quiz-dialog.component.scss']
})
export class RunQuizDialogComponent {

  constructor(private matDialogRef: MatDialogRef<RunQuizDialogComponent>){}

  form = new FormGroup({
    user: new FormControl('', Validators.required)
  })

  submit() {
    if (this.form.valid) {
      console.log('submitted', this.form.getRawValue())
      this.matDialogRef.close();
    }

  }

  cancel() {
    this.matDialogRef.close();
  }

}
