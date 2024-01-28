import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/Shared/services/api.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent {
  constructor(
    public dialogRef: MatDialogRef<DocumentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService
  ) {}

  handleApprove() {
    console.log(this.data);
    let payload = {
      id: this.data.element.id,
      isVerified:'3'
    };
    this.apiService.patchDriverDetails(payload).subscribe((res) => {
      console.log(res);
    });
    let dialogData = {
      data: this.data.element.id,
      status: 'approve',
    };
    this.dialogRef.close(dialogData);
  }
}
