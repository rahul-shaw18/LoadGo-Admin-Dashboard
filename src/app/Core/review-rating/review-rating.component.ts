import { Component } from '@angular/core';
import { TableService } from 'src/app/Shared/services/table.service';

@Component({
  selector: 'app-review-rating',
  templateUrl: './review-rating.component.html',
  styleUrls: ['./review-rating.component.scss'],
})
export class ReviewRatingComponent {
  ratingOptions = [
    {
      id: 1,
      displayName: 'Riders rating',
      value: 'rider',
    },
    {
      id: 2,
      displayName: `Drivers rating`,
      value: 'driver',
    },
  ];

  tableData: any;

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
