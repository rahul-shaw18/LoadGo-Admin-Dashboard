import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.scss'],
})
export class AddDriverComponent {
  constructor(
    public dialogRef: MatDialogRef<AddDriverComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
