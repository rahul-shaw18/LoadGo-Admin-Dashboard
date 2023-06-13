import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  profileImage: any;
  myForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      contact: ['', Validators.required],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      profileImage: [null, Validators.required],
    });
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
    reader.onload = (e:any) => {
      this.profileImage = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
