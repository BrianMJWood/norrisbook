import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { EntrydisplayComponent } from './Components/entrydisplay/entrydisplay.component';
import { EntryformComponent } from './Components/entryform/entryform.component';
import { Entry } from './Models/Entry';
import { JokeService } from './Service/joke.service';
import { map, tap } from 'rxjs';
import { EntryData } from './Models/EntryData';

@Component({
  selector: 'app-root',
  imports: [EntrydisplayComponent, EntryformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  jokeService = inject(JokeService);
  entries = signal<Entry[]>([]);
  serviceError: string = '';

  handleEntryFormSubmission(data: EntryData) {
    this.jokeService
      .getJoke()
      .pipe(
        map((val) => ({
          id: val.id,
          name: data.name,
          phoneNumber: data.phoneNumber,
          joke: val.value,
        }))
      )
      .subscribe({
        next: (val) => this.entries.update((entries) => [...entries, val]),
        error: (err) => {
          console.log(err);
          this.serviceError = err;
        },
      });
  }

  handleRemoveEntry(data: Entry) {
    const newEntries = this.entries().filter((entry) => entry.id !== data.id);
    this.entries.update(() => [...newEntries]);
  }
}
