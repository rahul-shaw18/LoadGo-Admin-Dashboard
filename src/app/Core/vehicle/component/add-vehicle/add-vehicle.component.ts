import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss'],
})
export class AddVehicleComponent {
  constructor(
    public dialogRef: MatDialogRef<AddVehicleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
