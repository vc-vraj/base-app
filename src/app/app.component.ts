import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VcSvgIconComponent } from 'ng-utility-library';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterOutlet, RouterLink, VcSvgIconComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  // menuItems: ImenuItems[] = [
  //   {
  //     label: "Edit",
  //     callback: this.handleItemClick.bind(this),
  //     isDisabled: true,
  //     icon: "../assets/images/1693229193Arnoud999-Right-or-wrong-4.svg"
  //   },
  //   {
  //     label: "Copy",
  //     callback: this.handleItemClick.bind(this),
  //     icon: '../assets/images/icons8-copy-100.png'
  //   },
  //   {
  //     label: "Paste",
  //     callback: this.handleItemClick.bind(this),
  //     icon: '../assets/images/icons8-paste-100.png'
  //   },
  //   {
  //     label: "Angular",
  //     callback: this.handleItemClick.bind(this),
  //     isDisabled: true,
  //   },
  // ]

  handleItemClick(item: any) {
    console.log('Selected item:', item);
    if(item === 'Angular') {
      location.assign('https://angular.io/docs');
    }
  }
}
