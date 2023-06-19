import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { materialModules } from 'src/app/shared/material-modules';

@Component({
  selector: 'app-add-quiz-dialog',
  standalone: true,
  imports: [CommonModule, materialModules, ReactiveFormsModule],
  templateUrl: './add-quiz-dialog.component.html',
  styleUrls: ['./add-quiz-dialog.component.scss']
})
export class AddQuizDialogComponent {

  constructor(private matDialogRef: MatDialogRef<AddQuizDialogComponent>){}

  form = new FormGroup({
    caption: new FormControl('', Validators.required), 
    image: new FormControl('')
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
