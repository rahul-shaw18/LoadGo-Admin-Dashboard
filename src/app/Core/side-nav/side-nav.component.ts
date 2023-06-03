import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { menuOptions } from 'src/app/Shared/utils/menuOptions-utils';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  menuOptions = menuOptions;
  filterMenuOptions: any = [];


  constructor(private router: Router) {}
  ngOnInit() {

    this.filterMenuOptions = menuOptions;
  }

  onMenuItemSelected(menuOption: any) {
    for (let item of menuOptions) {
      if (menuOption.id == item.id) {
        item.isSelected = true;

      } else {
        item.isSelected = false;
      }
    }
    console.log(menuOption);
  }

  onSelectedOption(e: any) {
    console.log(e);
  }

  onInputValue(e: any) {
    this.filterMenuOptions = [];

    for (let item of menuOptions) {
      if (item.name.toLowerCase().includes(e.toLowerCase())) {
        this.filterMenuOptions.push(item);
      }
    }
  }
}
