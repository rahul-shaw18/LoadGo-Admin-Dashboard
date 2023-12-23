import { DataSharedService } from './../../Shared/services/data-shared.service';
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

  constructor(
    private router: Router,
    private dataSharedService: DataSharedService
  ) {}
  ngOnInit() {
    this.dataSharedService.routerObserable$.subscribe((res) => {
      console.log(res)
      if (res) {
        this.updateMenuOptions(res.slice(1));
      }
    });
    this.updateMenuOptions(this.router.url.slice(1));
  }

  updateMenuOptions(url:string) {
    this.filterMenuOptions = menuOptions.map((menu) => ({
      ...menu,
      isSelected: menu.route.includes(url),
    }));
  }

  onMenuItemSelected(menuOption: any) {
    this.filterMenuOptions.forEach((menu: any) =>
      menu.id == menuOption.id
        ? (menu.isSelected = true)
        : (menu.isSelected = false)
    );
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
