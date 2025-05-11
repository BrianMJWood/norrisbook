import { Component, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EntryData } from '../../Models/EntryData';

@Component({
  selector: 'app-entryform',
  imports: [ReactiveFormsModule],
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
