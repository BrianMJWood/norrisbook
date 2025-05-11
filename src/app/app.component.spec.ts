import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { AppComponent } from './app.component';
import { JokeService } from './Service/joke.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let jokeServiceSpy: jasmine.SpyObj<JokeService>;

  beforeEach(async () => {
    jokeServiceSpy = jasmine.createSpyObj('JokeService', ['getJoke']);
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [{ provide: JokeService, useValue: jokeServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add an entry on successful form submission', () => {
    jokeServiceSpy.getJoke.and.returnValue(of({ id: 'j1', value: 'ha' }));
    const formData = { name: 'Jane', phoneNumber: '1234567890' };
    component.handleEntryFormSubmission(formData);
    expect(component.entries().length).toBe(1);
    expect(component.entries()[0]).toEqual({
      id: 'j1',
      name: 'Jane',
      phoneNumber: '1234567890',
      joke: 'ha',
    });
    expect(component.serviceError).toBe('');
  });

  it('should set serviceError when JokeService fails', () => {
    jokeServiceSpy.getJoke.and.returnValue(throwError(() => '500'));
    const formData = { name: 'Bob', phoneNumber: '0987654321' };
    component.handleEntryFormSubmission(formData);
    expect(component.entries().length).toBe(0);
    expect(component.serviceError).toBe('500');
  });

  it('should remove the specified entry', () => {
    const initial = [
      { id: '1', name: 'A', phoneNumber: '1', joke: 'j1' },
      { id: '2', name: 'B', phoneNumber: '2', joke: 'j2' },
    ];
    component.entries.set(initial);
    component.handleRemoveEntry(initial[0]);
    expect(component.entries().length).toBe(1);
    expect(component.entries()[0].id).toBe('2');
  });
});
