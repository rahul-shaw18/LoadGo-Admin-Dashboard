import { Component } from '@angular/core';
import { DialogService } from 'src/app/Shared/services/dialog.service';
import { TableService } from 'src/app/Shared/services/table.service';
import { AddRiderComponent } from './component/add-rider/add-rider.component';
import { ApiService } from 'src/app/Shared/services/api.service';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-riders',
  templateUrl: './riders.component.html',
  styleUrls: ['./riders.component.scss'],
})
export class RidersComponent {
  tableData$!: Observable<any>;

  constructor(
    private tableService: TableService,
    private dialogService: DialogService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.tableData$ = this.apiService.getRiders().pipe(catchError((err) => {
      console.log(err)
      return of([])
    }))
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
