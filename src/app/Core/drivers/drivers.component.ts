import { ApiService } from './../../Shared/services/api.service';
import { Component } from '@angular/core';
import { DialogService } from 'src/app/Shared/services/dialog.service';
import { AddDriverComponent } from './component/add-driver/add-driver.component';
import { driverOptions } from 'src/app/Shared/utils/menuOptions-utils';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DocumentsComponent } from './component/documents/documents.component';
import { TripsComponent } from './component/trips/trips.component';

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

  handleSelectedDriver(e: any) {
    console.log(e);

    let openComponent: any;
    if (e.selectedOption == 'view-documents') {
      openComponent = DocumentsComponent;
    }else if(e.selectedOption == 'view-trips') {
      openComponent = TripsComponent;
    } else {
      openComponent = AddDriverComponent;
    }

    const dialogRef = this.dialog.open(openComponent, {
      data: e,
      disableClose: e.selectedOption == 'view-documents' ? true : false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      if (e.selectedOption == 'view-documents') {
        console.log(result.status)
        if (result.status == 'approve') {
          this.ngOnInit()
        }
      }
    });
  }
}
