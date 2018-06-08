import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLaunchpadDialogComponent } from './detail-launchpad-dialog.component';

describe('DetailLaunchpadDialogComponent', () => {
  let component: DetailLaunchpadDialogComponent;
  let fixture: ComponentFixture<DetailLaunchpadDialogComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailLaunchpadDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLaunchpadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
