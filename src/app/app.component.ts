import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CustomActionMenuComponent } from './components/custom-action-menu/custom-action-menu.component';
import { VcSvgIconComponent } from 'ng-utility-library';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterOutlet, RouterLink, CustomActionMenuComponent, VcSvgIconComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  menuItems: any[] = [
    {
      label: "Edit",
      callback: this.handleItemClick.bind(this),
      isDisabled: true,
      icon: "../assets/images/1693229193Arnoud999-Right-or-wrong-4.svg"
    },
    {
      label: "Copy",
      callback: this.handleItemClick.bind(this),
      icon: '../assets/images/icons8-copy-100.png'
    },
    {
      label: "Paste",
      callback: this.handleItemClick.bind(this),
      icon: '../assets/images/icons8-paste-100.png'
    },
    {
      label: "Angular",
      callback: this.handleItemClick.bind(this),
      isDisabled: true,
    },
  ]

  handleItemClick(item: any) {
    console.log('Selected item:', item);
    if(item === 'Angular') {
      location.assign('https://angular.io/docs');
    }
  }
}
