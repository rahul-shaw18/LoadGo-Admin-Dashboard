import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent {
  constructor(
    public dialogRef: MatDialogRef<DocumentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }


}
