import { Component, input, output } from '@angular/core';
import { Entry } from '../../Models/Entry';
import { fibonacciCheck } from '../../Utils/FibonacciCheck';

@Component({
  selector: 'app-entrydisplay',
  imports: [],
  templateUrl: './entrydisplay.component.html',
  styleUrl: './entrydisplay.component.scss',
})
export class EntrydisplayComponent {
  entries = input<Entry[]>();
  removeEntry = output<Entry>();

  onRemoveEntry(entry: Entry) {
    this.removeEntry.emit(entry);
  }

  isFibonacci(index: number) {
    return fibonacciCheck(index);
  }
}
