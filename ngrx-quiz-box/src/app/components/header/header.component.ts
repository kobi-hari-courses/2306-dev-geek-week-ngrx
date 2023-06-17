import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialModules } from 'src/app/shared/material-modules';
import { NavItemDirective } from './nav-item.directive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, materialModules, NavItemDirective, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
