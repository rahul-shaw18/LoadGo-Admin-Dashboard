import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-pages',
  templateUrl: './add-pages.component.html',
  styleUrls: ['./add-pages.component.scss'],
})
export class AddPagesComponent {
  myForm!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AddPagesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      pageName: ['', Validators.required],
      pageTitle: ['', Validators.required],
      pageDescription: ['', Validators.required],
    });
  }

  get gf() {
    return this.myForm.controls
  }

  onSubmit() {
    // Handle form submission logic here
    // Access form values using this.myForm.value
  }

  onReset() {
    
  }
}
