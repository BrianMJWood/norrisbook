import { Component, input } from '@angular/core';
import { Entry } from '../../Models/Entry';

@Component({
  selector: 'app-entrydisplay',
  imports: [],
  templateUrl: './entrydisplay.component.html',
  styleUrl: './entrydisplay.component.scss',
})
export class EntrydisplayComponent {
  entries = input<Entry[]>();
}
