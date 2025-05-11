import { Component, inject, signal } from '@angular/core';
import { EntrydisplayComponent } from './Components/entrydisplay/entrydisplay.component';
import { EntryformComponent } from './Components/entryform/entryform.component';
import { Entry } from './Models/Entry';
import { JokeService } from './Service/joke.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [EntrydisplayComponent, EntryformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  jokeService = inject(JokeService);

  entries = signal<Entry[]>([]);

  handleEntryFormSubmission(data: any) {
    this.jokeService
      .getJoke()
      .pipe(
        map((val) => ({
          id: val.id,
          name: data.name,
          phoneNumber: data.phoneNumber,
          joke: val.value,
        })),
        tap((val) => console.log(val))
      )

      .subscribe({
        next: (val) => this.entries.update((entries) => [...entries, val]),
      });
  }
}
