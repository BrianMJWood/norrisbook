import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrydisplayComponent } from './entrydisplay.component';

describe('EntrydisplayComponent', () => {
  let component: EntrydisplayComponent;
  let fixture: ComponentFixture<EntrydisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrydisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrydisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
