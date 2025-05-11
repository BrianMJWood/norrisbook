import { Component, computed, input, output } from '@angular/core';
import { Entry } from '../../Models/Entry';
import { fibonacciCheck } from '../../Utils/FibonacciCheck';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-entrydisplay',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './entrydisplay.component.html',
  styleUrl: './entrydisplay.component.scss',
})
export class EntrydisplayComponent {
  entries = input.required<Entry[]>();
  removeEntry = output<Entry>();
  displayEntries = computed(() => this.entries().length > 0);

  onRemoveEntry(entry: Entry) {
    this.removeEntry.emit(entry);
  }

  isFibonacci(index: number) {
    return fibonacciCheck(index);
  }
}
