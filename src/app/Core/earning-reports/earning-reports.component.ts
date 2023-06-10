import { Component } from '@angular/core';
import { TableService } from 'src/app/Shared/services/table.service';

@Component({
  selector: 'app-earning-reports',
  templateUrl: './earning-reports.component.html',
  styleUrls: ['./earning-reports.component.scss'],
})
export class EarningReportsComponent {
  tableData: any;
  earningReportsOptions = [
    {
      id: 0,
      displayName: 'All Reports',
      value: 'all Reports',
    },
    {
      id: 1,
      displayName: 'Admin Payment',
      value: 'adminPayment',
    },
    {
      id: 2,
      displayName: 'Driver Payment',
      value: 'driversPaymentReports',
    }
  ];

  constructor(private tableService: TableService) {}

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

  onSelectedOption(e: any) {
    console.log(e);
  }

  onInputValue(e: any) {
    console.log(e);
  }
}
