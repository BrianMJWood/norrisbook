import { Component, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EntryData } from '../../Models/EntryData';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-entryform',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
  ],
  templateUrl: './entryform.component.html',
  styleUrl: './entryform.component.scss',
})
export class EntryformComponent {
  entryForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{10}$/),
    ]),
  });

  entryFormSubmission = output<EntryData>();

  onSubmit() {
    const name = this.entryForm.controls.name.value!;
    const phoneNumber = this.entryForm.controls.phoneNumber.value!;
    this.entryFormSubmission.emit({ name, phoneNumber });
    this.entryForm.reset();
  }
}
