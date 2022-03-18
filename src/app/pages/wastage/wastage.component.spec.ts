import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaistageComponent } from './waistage.component';

describe('WaistageComponent', () => {
  let component: WaistageComponent;
  let fixture: ComponentFixture<WaistageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaistageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaistageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
