import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { MenuItems } from '../MenuItems';

@Component({
  selector: 'app-custom-drop-down',
  templateUrl: './custom-drop-down.component.html',
  styleUrls: ['./custom-drop-down.component.scss'],
})
export class CustomDropDownComponent implements OnChanges {
  @Input() text!: MenuItems;
  @Input()
  placeHolder!: string;
  @Input()
  menuList!: MenuItems[];
  @Output() onSelection = new EventEmitter<string>();
  arrowToggle: boolean = true;
  selectedItem!: string;
  constructor() { } 

  ngOnChanges(){
    this.selectedItem = this.text?.name;
  }


  selectItems(menu: MenuItems) {
    this.onSelection.emit(menu.id);
    this.selectedItem = menu.name;
    this.arrowToggle = true;
  }

  toggleArrow() {
    this.arrowToggle = !this.arrowToggle;
  }
  inputChange() {
    console.log('input change');
    console.log(this.selectedItem);
    console.log(this.text);
  }
  getHeight() {
    if (this.menuList?.length < 8) {
      let height = (24 * this.menuList.length) - 2;
      return height + 'px';
    }
    else {
      return '166px';
    }
  }
}
