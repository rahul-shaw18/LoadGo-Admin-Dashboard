import { Component } from '@angular/core';
import { DialogService } from 'src/app/Shared/services/dialog.service';
import { TableService } from 'src/app/Shared/services/table.service';
import { AddVehicleComponent } from './component/add-vehicle/add-vehicle.component';
import { ApiService } from 'src/app/Shared/services/api.service';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent {
  tableData$!: Observable<any>;

  constructor(
    private tableService: TableService,
    private dialogService: DialogService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.tableData$ = this.apiService.getUsers().pipe(
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    );
  }

  // table
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'phone',
    'address',
    // 'pushToken',
    'refferedBy',
  ];

  addUser() {
    this.dialogService.openDialog(AddVehicleComponent);
  }
}
