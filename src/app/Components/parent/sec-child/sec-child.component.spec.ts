import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecChildComponent } from './sec-child.component';

describe('SecChildComponent', () => {
  let component: SecChildComponent;
  let fixture: ComponentFixture<SecChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
