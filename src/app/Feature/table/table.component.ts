import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { filter } from './../../Shared/interface/filter-interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnChanges, OnInit, AfterViewInit {
  @Input() tableData: any;
  @Input() displayedColumns: any;
  @Input() tableToDisplay!: any;

  @Output() selectedDriver = new EventEmitter<Object>
  dataSource: any;
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['tableData'].currentValue);
    if (changes['tableData'].currentValue) {
      this.dataSource = new MatTableDataSource(this.tableData || []);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  ngOnInit() {}

  ngAfterViewInit() {}

  onFilter(e: any) {
    const filterValue = (e.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }

  onRowClicked(row: any) {
    console.log(row);
  }

  onClicked(element: Object,selectedOption:string) {
    console.log(element, selectedOption);
    let data = {
      element: element,
      selectedOption:selectedOption
    }
    this.selectedDriver.emit(data)
  }

}
