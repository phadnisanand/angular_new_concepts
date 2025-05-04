import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondiComponent } from './condi.component';

describe('CondiComponent', () => {
  let component: CondiComponent;
  let fixture: ComponentFixture<CondiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CondiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
