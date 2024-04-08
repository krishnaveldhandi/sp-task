import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationPopupComponent } from 'src/app/registration-popup/registration-popup.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent implements OnInit {
  registrationForm!: FormGroup;
  registeredData: any[] = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobileNumber: new FormControl('', [
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.required,
        Validators.pattern('[1-9]{1}[0-9]{9}'),
      ]),
      address: new FormControl('', Validators.required),
      pinCode: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const data = this.registrationForm.value;
      data.id = this.registeredData?.length;
      this.registeredData.push(data);
      console.log(this.registeredData);
      console.log('Registration Successful');
      this.openSuccessDialog();
    } else {
      this.openFailureDialog();
      console.error('Form is invalid. Cannot submit.');
    }
  }
  openSuccessDialog(): void {
    const dialogRef = this.dialog.open(RegistrationPopupComponent, {
      width: '350px',
      data: {
        title: 'Registration Successful',
        message: 'Your registration was successful.',
      },
    });
  }

  openFailureDialog(): void {
    const dialogRef = this.dialog.open(RegistrationPopupComponent, {
      width: '350px',
      data: {
        title: 'Registration Failed',
        message: 'Please fill in all required fields correctly.',
      },
    });
  }
}
