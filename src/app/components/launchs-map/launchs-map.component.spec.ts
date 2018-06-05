import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchsMapComponent } from './launchs-map.component';

describe('LaunchsMapComponent', () => {
  let component: LaunchsMapComponent;
  let fixture: ComponentFixture<LaunchsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
