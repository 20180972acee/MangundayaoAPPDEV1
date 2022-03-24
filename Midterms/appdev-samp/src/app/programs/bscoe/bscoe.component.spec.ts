import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BscoeComponent } from './bscoe.component';

describe('BscoeComponent', () => {
  let component: BscoeComponent;
  let fixture: ComponentFixture<BscoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BscoeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BscoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
