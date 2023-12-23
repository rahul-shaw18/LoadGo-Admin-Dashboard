import { Component, OnInit } from '@angular/core';
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
    let url = this.router.url.slice(1)
    this.filterMenuOptions = menuOptions.map(menu => {
      return {...menu, isSelected:menu.route.includes(url)}
    })

  }

  onMenuItemSelected(menuOption: any) {
    this.filterMenuOptions.forEach((menu:any) => menu.id == menuOption.id ? menu.isSelected = true : menu.isSelected = false);
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
