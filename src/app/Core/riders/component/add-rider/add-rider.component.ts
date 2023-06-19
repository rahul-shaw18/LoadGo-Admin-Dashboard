import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-rider',
  templateUrl: './add-rider.component.html',
  styleUrls: ['./add-rider.component.scss'],
})
export class AddRiderComponent {
  constructor(
    public dialogRef: MatDialogRef<AddRiderComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {}
}
