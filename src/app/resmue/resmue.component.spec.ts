import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResmueComponent } from './resmue.component';

describe('ResmueComponent', () => {
  let component: ResmueComponent;
  let fixture: ComponentFixture<ResmueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResmueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResmueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
