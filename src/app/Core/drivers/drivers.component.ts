import { ApiService } from './../../Shared/services/api.service';
import { Component } from '@angular/core';
import { DialogService } from 'src/app/Shared/services/dialog.service';
import { TableService } from 'src/app/Shared/services/table.service';
import { AddDriverComponent } from './component/add-driver/add-driver.component';
import { driverOptions } from 'src/app/Shared/utils/menuOptions-utils';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
})
export class DriversComponent {
  tableData$!: Observable<any>;
  driversOptions = driverOptions;

  constructor(
    private tableService: TableService,
    private dialogService: DialogService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.tableData$ = this.apiService.getDriver().pipe(
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }

  // table
  displayedColumns: string[] = [
    'driverId',

    'driverName',
    'vehicleNumber',
    'vehicleType',
    'isActive',
    'status',
  ];

  onSelectedOption(e: any) {
    console.log(e);
  }

  onInputValue(e: any) {
    console.log(e);
  }
  addDriver() {
    this.dialogService.openDialog(AddDriverComponent);
  }
}
