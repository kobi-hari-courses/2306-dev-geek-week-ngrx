import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialModules } from 'src/app/shared/material-modules';
import { NavItemDirective } from './nav-item.directive';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddQuizDialogComponent } from '../add-quiz-dialog/add-quiz-dialog.component';
import { v4 } from 'uuid';
import { firstValueFrom } from 'rxjs';
import { Quiz } from 'src/app/models/quiz.model';
import { Store } from '@ngrx/store';
import { appActions } from 'src/app/redux/actions/app.actions';
import { ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, materialModules, NavItemDirective, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'], 
})
export class HeaderComponent {
  constructor(
    private matDialog: MatDialog, 
    private store: Store){}

  async open() {
    const uid = v4();
    console.log(uid);

    const dialogRef = this.matDialog.open(AddQuizDialogComponent, {
      disableClose: true, 
      hasBackdrop: false
    });

    const onClose = firstValueFrom(dialogRef.afterClosed()) as Promise<Quiz | null>;
    const result = await onClose;

    if (result !== null) {
      const action = appActions.addNewQuiz({quiz: result});
      this.store.dispatch(action);
    }


  }

}
