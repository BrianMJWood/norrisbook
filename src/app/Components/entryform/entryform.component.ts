import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

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

  onSubmit() {
    console.log(this.entryForm.value);
  }
}
