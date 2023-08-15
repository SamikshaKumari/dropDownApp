import { Component, OnInit } from '@angular/core';
import { MenuItems } from './MenuItems';
import * as items from '../assets/jsons/MenuItems.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dropDownApp';
  placeHolder: string = "Select an option";
  selectedOption: MenuItems = new MenuItems;
  menuList!: MenuItems[];
  url = '../assets/jsons/MenuItems.json';
  constructor() { }

  ngOnInit() {
    this.menuList = JSON.parse(JSON.stringify(items)).data;
  }
  onSelect(event: string) {
    this.selectedOption = this.menuList.filter(x => x.id === event)[0];
  }

}
