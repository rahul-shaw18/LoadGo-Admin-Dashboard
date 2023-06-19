import { Component } from '@angular/core';
import { DialogService } from 'src/app/Shared/services/dialog.service';
import { TableService } from 'src/app/Shared/services/table.service';
import { AddRiderComponent } from './component/add-rider/add-rider.component';

@Component({
  selector: 'app-riders',
  templateUrl: './riders.component.html',
  styleUrls: ['./riders.component.scss'],
})
export class RidersComponent {
  tableData: any;

  constructor(private tableService: TableService, private dialogService:DialogService) {}

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

  openAddRider() {
    this.dialogService.openDialog(AddRiderComponent);
  }
}
