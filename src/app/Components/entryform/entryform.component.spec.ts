import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EntryformComponent } from './entryform.component';
import { EntryData } from '../../Models/EntryData';

describe('EntryformComponent', () => {
  let component: EntryformComponent;
  let fixture: ComponentFixture<EntryformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntryformComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EntryformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form and disabled button on load', () => {
    const button = fixture.nativeElement.querySelector('#submit-button');
    expect(component.entryForm.invalid).toBeTrue();
    expect(button.disabled).toBeTrue();
  });

  it('should show name validation error after invalid entry', () => {
    const nameInput = fixture.debugElement.query(
      By.css('#name-input')
    ).nativeElement;
    nameInput.value = 'J';
    nameInput.dispatchEvent(new Event('input'));
    nameInput.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    const error = fixture.nativeElement.querySelector('mat-error');
    expect(error?.textContent?.trim()).toBe('Must be at least 2 characters');
  });

  it('should show phone validation error after invalid entry', () => {
    const phoneInput = fixture.debugElement.query(
      By.css('#phone-number-input')
    ).nativeElement;
    phoneInput.value = '123';
    phoneInput.dispatchEvent(new Event('input'));
    phoneInput.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    const error = fixture.nativeElement.querySelector('mat-error');
    expect(error?.textContent?.trim()).toBe('Must be 10 numbers only');
  });

  it('should emit entryFormSubmission with correct payload and reset form on submit', () => {
    const nameInput = fixture.debugElement.query(
      By.css('#name-input')
    ).nativeElement;
    const phoneInput = fixture.debugElement.query(
      By.css('#phone-number-input')
    ).nativeElement;

    nameInput.value = 'John';
    phoneInput.value = '1234567890';
    nameInput.dispatchEvent(new Event('input'));
    phoneInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const emitSpy = spyOn(component.entryFormSubmission, 'emit');
    const form = fixture.debugElement.query(By.css('form'));

    form.triggerEventHandler('ngSubmit', {});
    fixture.detectChanges();

    const expectedValue = { name: 'John', phoneNumber: '1234567890' };
    expect(emitSpy).toHaveBeenCalledOnceWith(expectedValue);
    expect(component.entryForm.controls.name.value).toBe(null);
    expect(component.entryForm.controls.phoneNumber.value).toBe(null);
    expect(component.entryForm.invalid).toBeTrue();
  });

  it('should display service error when provided', () => {
    fixture.componentRef.setInput('serviceError', '500');
    fixture.detectChanges();
    const errorSpan = fixture.debugElement.query(By.css('#service-error'));
    expect(errorSpan).toBeTruthy();
  });
});
