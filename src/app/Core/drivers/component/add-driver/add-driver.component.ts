import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.scss'],
})
export class AddDriverComponent {
  myForm!: FormGroup;
  profileImage: any;
  constructor(
    public dialogRef: MatDialogRef<AddDriverComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
   let { element } = this.data

    this.myForm = this.formBuilder.group({
      driverName: [element?.driverName?element?.driverName:'', Validators.required],
      email: [element?.email?element?.email:'', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      accountHolderName: [element?.accountHolderName?element?.accountHolderName:'', [Validators.required]],
      accountNumber: [element?.accountNumber?element?.accountNumber:'', [Validators.required]],
      bankName: [element?.bankName?element?.bankName:'', [Validators.required]],
      bankLocation: [element?.bankLocation?element?.bankLocation:'', [Validators.required]],
      swiftCode: [element?.swiftCode?element?.swiftCode:'', [Validators.required]],
      address: [element?.address?element?.address:'', [Validators.required]],
      paymentEmail: [element?.email?element?.email:'', [Validators.required]],
      contact: [element?.phone?element?.phone:'', Validators.required],
      vehicleType: [element?.email?element?.email:'', Validators.required],
      profileImage: [element?.email?element?.email:null, Validators.required],
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
}
