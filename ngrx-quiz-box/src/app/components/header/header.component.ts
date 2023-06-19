import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialModules } from 'src/app/shared/material-modules';
import { NavItemDirective } from './nav-item.directive';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { appActions } from 'src/app/redux/actions/app.actions';


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

  open() {
    const action = appActions.startCreateNewQuiz();
    this.store.dispatch(action);
  }

}
