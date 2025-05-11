import { Component } from '@angular/core';
import { EntrydisplayComponent } from './Components/entrydisplay/entrydisplay.component';
import { EntryformComponent } from './Components/entryform/entryform.component';

@Component({
  selector: 'app-root',
  imports: [EntrydisplayComponent, EntryformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'norrisbook';
}
