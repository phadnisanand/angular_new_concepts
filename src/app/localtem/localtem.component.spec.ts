import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaltemComponent } from './localtem.component';

describe('LocaltemComponent', () => {
  let component: LocaltemComponent;
  let fixture: ComponentFixture<LocaltemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocaltemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocaltemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
