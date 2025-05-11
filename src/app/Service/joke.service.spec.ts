import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

import { JokeService } from './joke.service';
import { JokeData } from '../Models/JokeData';
import { provideHttpClient } from '@angular/common/http';

describe('JokeService', () => {
  let service: JokeService;
  let httpMock: HttpTestingController;

  const mockJoke: JokeData = {
    id: '1',
    value: 'Example joke',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JokeService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(JokeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should perform one GET and return JokeData', () => {
    let actual: JokeData | undefined;

    service.getJoke().subscribe((j) => (actual = j));

    const req = httpMock.expectOne(service.baseUrl);
    expect(req.request.method).toBe('GET');

    req.flush(mockJoke);
    expect(actual).toEqual(mockJoke);
  });
});
