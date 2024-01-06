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
  isEditable: boolean = true
  showEditBtn = false
  constructor(
    public dialogRef: MatDialogRef<AddDriverComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
    if (!Object.keys(data).length) {
      this.isEditable = false
    } else {
      this.showEditBtn = true
    }
  }

  ngOnInit() {
   let { element } = this.data
    
   this.myForm = this.formBuilder.group({
    driverName: [{ value: element?.driverName ? element?.driverName : '', disabled: this.isEditable }, Validators.required],
    email: [{ value: element?.email ? element?.email : '', disabled: this.isEditable }, [Validators.required, Validators.email]],
    password: [{ value: '', disabled: this.isEditable }, [Validators.required]],
    confirmPassword: [{ value: '', disabled: this.isEditable }, [Validators.required]],
    accountHolderName: [{ value: element?.accountHolderName ? element?.accountHolderName : '', disabled: this.isEditable }, [Validators.required]],
    accountNumber: [{ value: element?.accountNumber ? element?.accountNumber : '', disabled: this.isEditable }, [Validators.required]],
    bankName: [{ value: element?.bankName ? element?.bankName : '', disabled: this.isEditable }, [Validators.required]],
    bankLocation: [{ value: element?.bankLocation ? element?.bankLocation : '', disabled: this.isEditable }, [Validators.required]],
    swiftCode: [{ value: element?.swiftCode ? element?.swiftCode : '', disabled: this.isEditable }, [Validators.required]],
    address: [{ value: element?.address ? element?.address : '', disabled: this.isEditable }, [Validators.required]],
    paymentEmail: [{ value: element?.email ? element?.email : '', disabled: this.isEditable }, [Validators.required]],
    contact: [{ value: element?.phone ? element?.phone : '', disabled: this.isEditable }, Validators.required],
    vehicleType: [{ value: element?.email ? element?.email : '', disabled: this.isEditable }, Validators.required],
    profileImage: [{ value: element?.email ? element?.email : null, disabled: this.isEditable }, Validators.required],
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

  onReset() { }
  
  onClicked() {
    if (this.isEditable) {
      this.myForm.enable();
    } else {
      this.myForm.disable();
    }
    this.isEditable = !this.isEditable;
  }
}
