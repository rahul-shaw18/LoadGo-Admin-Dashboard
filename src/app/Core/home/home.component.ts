import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { vehicleNumber } from 'src/app/Shared/utils/filter-utils';
import { menuOptions } from 'src/app/Shared/utils/menuOptions-utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  searchOptions = vehicleNumber;

}
