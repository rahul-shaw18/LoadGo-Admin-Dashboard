import { Component, ViewChild, OnInit } from '@angular/core';
import { DataSharedService } from 'src/app/Shared/services/data-shared.service';

import { TableService } from 'src/app/Shared/services/table.service';
import { dashboardCards } from 'src/app/Shared/utils/menuOptions-utils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  cardArray = dashboardCards
  tableData: any;

  constructor(private tableService: TableService, private dataSharedService:DataSharedService) {}

  ngOnInit() {
    this.tableData = this.tableService.getTableData();
  }

  // table
  displayedColumns: string[] = [
    'rideId',
    'riderName',
    'driverName',
    'pickDropAddress',
    'date',
    'rideFare',
    'status',
  ];

  handleCardClick(route:string) {
    this.dataSharedService.routerObserable$.next(route)
  }
}
