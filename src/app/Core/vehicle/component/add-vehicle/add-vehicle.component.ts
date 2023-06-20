import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss'],
})
export class AddVehicleComponent {
  myForm!: FormGroup;
  profileImage: any;

  statusOptions = [
    {
      id: 0,
      displayName: 'Active',
      value: 'active',
    },
    {
      id: 1,
      displayName: 'Stopped',
      value: 'stopped',
    },
  ];
  constructor(
    public dialogRef: MatDialogRef<AddVehicleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      contact: ['', Validators.required],
      gender: ['', Validators.required],
      profileImage: [null, Validators.required],
    });
  }

  get gf() {
    return this.myForm.controls;
  }

  onSubmit() {
    // Handle form submission logic here
    // Access form values using this.myForm.value
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.readFile(file);
  }

  onDragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: any) {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files[0];
    this.readFile(file);
  }

  private readFile(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.profileImage = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  onReset() {}

  onSelectedOption(e: any) {
    console.log(e);
  }
  onInputValue(e: any) {
    console.log(e);
  }
}
