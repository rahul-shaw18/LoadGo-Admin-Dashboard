import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmNewPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    // Handle form submission logic here
    // Access form values using this.myForm.value
  }
}
