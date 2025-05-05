import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangedecComponent } from './changedec.component';

describe('ChangedecComponent', () => {
  let component: ChangedecComponent;
  let fixture: ComponentFixture<ChangedecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangedecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangedecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
