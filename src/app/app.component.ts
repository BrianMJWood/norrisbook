import { Component, signal } from '@angular/core';
import { EntrydisplayComponent } from './Components/entrydisplay/entrydisplay.component';
import { EntryformComponent } from './Components/entryform/entryform.component';
import { Entry } from './Models/Entry';

@Component({
  selector: 'app-root',
  imports: [EntrydisplayComponent, EntryformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  entries = signal<Entry[]>([]);

  handleEntryFormSubmission(data: any) {
    const newEntry: Entry = {
      id: '',
      name: data.name,
      phoneNumber: data.phoneNumber,
      joke: '',
    };

    this.entries.update((entries) => [...entries, newEntry]);
  }
}
