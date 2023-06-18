import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialModules } from 'src/app/shared/material-modules';
import { NavItemDirective } from './nav-item.directive';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddQuizDialogComponent } from '../add-quiz-dialog/add-quiz-dialog.component';
import { RunQuizDialogComponent } from '../run-quiz-dialog/run-quiz-dialog.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, materialModules, NavItemDirective, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private matDialog: MatDialog){}

  open() {
    this.matDialog.open(AddQuizDialogComponent, {
      disableClose: true, 
      hasBackdrop: false
    });
  }

}
