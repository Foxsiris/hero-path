import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerousComponent } from './herous.component';

describe('HerousComponent', () => {
  let component: HerousComponent;
  let fixture: ComponentFixture<HerousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
