import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Params } from '@angular/router';

@Component({
  selector: 'app-custom-action-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-action-menu.component.html',
  styleUrls: ['./custom-action-menu.component.scss']
})
export class CustomActionMenuComponent {

  /* The code you provided is defining input properties for the `VcActionMenuComponent` component. */
  //#region required
  @Input({ required: true }) menuItems!: any[];
  //#endregion 
  
  //#region optional 
  @Input() actionIconPosition: 'vertical' | 'horizontal' = "vertical";
  @Input() referenceData!: any;
  @Input() actionMenuClass!: Params;
  @Input() menuIconColor = 'black';
  //#endregion 
  
  isMenuOpen = false;
  wasOpenedByClick = false; // Add this property


  // ... (existing code)

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.wasOpenedByClick = true;
  }

  // Add the hover event listener
  onMenuHover() {
    if (!this.wasOpenedByClick) {
      this.isMenuOpen = true;
    }
  }

  onMenuLeave() {
    if (!this.wasOpenedByClick) {
      this.isMenuOpen = false;
    }
  }
  /**
   * The function `handleItemClick` checks if an item is disabled and if not, calls the callback
   * function with either the reference data or the item label.
   * @param {ImenuItems} item - The `item` parameter is of type `ImenuItems`, which is an interface
   * representing a menu item.
   */
  handleItemClick(item: any) {
    if (!item.isDisabled) {
      item.callback(this.referenceData || item.label);
    }
    this.isMenuOpen = false
  }
}
