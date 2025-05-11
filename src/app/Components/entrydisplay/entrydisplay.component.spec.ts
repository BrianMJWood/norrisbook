import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EntrydisplayComponent } from './entrydisplay.component';
import { Entry } from '../../Models/Entry';

describe('EntrydisplayComponent', () => {
  let component: EntrydisplayComponent;
  let fixture: ComponentFixture<EntrydisplayComponent>;

  const sampleEntries: Entry[] = [
    {
      name: 'Test Bob',
      phoneNumber: '1111111111',
      joke: 'J1',
      id: '1',
    },
    {
      name: 'Test Jim',
      phoneNumber: '2222222222',
      joke: 'J2',
      id: '2',
    },
    {
      name: 'Test Greg',
      phoneNumber: '3333333333',
      joke: 'J3',
      id: '3',
    },
    {
      name: 'Test Bean',
      phoneNumber: '4444444444',
      joke: 'J4',
      id: '4',
    },
    {
      name: 'Test Alice',
      phoneNumber: '5555555555',
      joke: 'J5',
      id: '5',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrydisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EntrydisplayComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('displayEntries should be false when no entries are provided and template should not render list', () => {
    fixture.componentRef.setInput('entries', []);
    fixture.detectChanges();
    expect(component.displayEntries()).toBeFalse();
    expect(fixture.nativeElement.querySelector('.entry-display')).toBeNull();
  });

  it('should render the correct number of entries and have displayEntries true', () => {
    fixture.componentRef.setInput('entries', sampleEntries);
    fixture.detectChanges();
    expect(component.displayEntries()).toBeTrue();
  });

  it('should emit removeEntry when the first entry icon is clicked', () => {
    fixture.componentRef.setInput('entries', sampleEntries);
    fixture.detectChanges();

    const emitSpy = spyOn(component.removeEntry, 'emit');
    const firstIcon = fixture.debugElement.query(By.css('.entry mat-icon'));
    firstIcon.triggerEventHandler('click', null);

    expect(emitSpy).toHaveBeenCalledOnceWith(sampleEntries[0]);
  });

  it('isFibonacci should correctly identify Fibonacci and non‑Fibonacci indices', () => {
    fixture.componentRef.setInput('entries', sampleEntries);
    fixture.detectChanges();
    const entry1 = fixture.debugElement.query(By.css('#entry-0'));
    const entry2 = fixture.debugElement.query(By.css('#entry-1'));
    const entry3 = fixture.debugElement.query(By.css('#entry-2'));
    const entry4 = fixture.debugElement.query(By.css('#entry-3'));
    const entry5 = fixture.debugElement.query(By.css('#entry-4'));

    expect(entry1.styles['backgroundColor']).toBe('lightgreen');
    expect(entry2.styles['backgroundColor']).toBe('lightgreen');
    expect(entry3.styles['backgroundColor']).toBe('lightgreen');
    expect(entry4.styles['backgroundColor']).toBe('lightgreen');
    expect(entry5.styles['backgroundColor']).toBe('');
  });
});
