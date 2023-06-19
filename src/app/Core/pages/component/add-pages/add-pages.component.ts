import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-pages',
  templateUrl: './add-pages.component.html',
  styleUrls: ['./add-pages.component.scss'],
})
export class AddPagesComponent {
  constructor(
    public dialogRef: MatDialogRef<AddPagesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
