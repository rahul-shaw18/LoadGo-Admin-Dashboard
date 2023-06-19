import { Component } from '@angular/core';
import { DialogService } from 'src/app/Shared/services/dialog.service';
import { TableService } from 'src/app/Shared/services/table.service';
import { AddPagesComponent } from './component/add-pages/add-pages.component';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {
  tableData: any;

  constructor(
    private tableService: TableService,
    private dialogService: DialogService
  ) {}

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

  openAddPages() {
    this.dialogService.openDialog(AddPagesComponent);
  }
}
