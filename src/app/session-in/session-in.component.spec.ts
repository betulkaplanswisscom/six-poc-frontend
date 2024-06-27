import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionInComponent } from './session-in.component';

describe('SessionInComponent', () => {
  let component: SessionInComponent;
  let fixture: ComponentFixture<SessionInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
