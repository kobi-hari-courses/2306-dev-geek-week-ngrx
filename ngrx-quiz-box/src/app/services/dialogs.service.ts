import { ObserversModule } from '@angular/cdk/observers';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { AddQuizDialogComponent } from '../components/add-quiz-dialog/add-quiz-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogsService {
  constructor(private matDialog: MatDialog) {}

  openNewQuizDialog(): Observable<Quiz | null> {
    return new Observable<Quiz | null>((observer) => {
      const dialogRef = this.matDialog.open(AddQuizDialogComponent, {
        disableClose: true,
        hasBackdrop: false,
      });

      const subscription = dialogRef.afterClosed().subscribe((res) => {
        observer.next(res);
        observer.complete();
      });

      return () => {
        subscription.unsubscribe();
        dialogRef.close();
      }
    });
  }
}
