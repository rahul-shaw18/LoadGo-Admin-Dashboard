import { DataSharedService } from 'src/app/Shared/services/data-shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private dataSharedService:DataSharedService){}


  handleClick(route: string) {
    this.dataSharedService.routerObserable$.next(route)
  }

}
