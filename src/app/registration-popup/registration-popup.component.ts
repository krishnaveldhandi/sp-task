import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-registration-popup',
  templateUrl: './registration-popup.component.html',
  styleUrls: ['./registration-popup.component.scss'],
})
export class RegistrationPopupComponent {
  dialog: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
