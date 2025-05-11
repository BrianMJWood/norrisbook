import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JokeData } from '../Models/JokeData';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  baseUrl = 'https://api.chucknorris.io/jokes/random';
  http = inject(HttpClient);

  getJoke(): Observable<JokeData> {
    return this.http.get<JokeData>(this.baseUrl);
  }
}
