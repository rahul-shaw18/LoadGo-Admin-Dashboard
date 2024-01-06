import { ApiService } from './../../Shared/services/api.service';
import { Component } from '@angular/core';
import { DialogService } from 'src/app/Shared/services/dialog.service';
import { AddDriverComponent } from './component/add-driver/add-driver.component';
import { driverOptions } from 'src/app/Shared/utils/menuOptions-utils';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DocumentsComponent } from './component/documents/documents.component';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
})
export class DriversComponent {
  tableData$!: Observable<any>;
  driversOptions = driverOptions;

  constructor(
    private dialogService: DialogService,
    private apiService: ApiService,
    public dialog: MatDialog
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
    'options',
  ];

  onSelectedOption(e: any) {
    console.log(e);
  }

  onInputValue(e: any) {
    console.log(e);
  }
  addDriver() {
    const dialogRef = this.dialog.open(AddDriverComponent, {
      data: {},
  
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }

  handleSelectedDriver(e:any) {
    console.log(e)

    const dialogRef = this.dialog.open(e?.selectedOption == 'view-documents' ? DocumentsComponent:AddDriverComponent, {
      data: e,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
}
