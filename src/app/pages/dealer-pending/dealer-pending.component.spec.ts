import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerPendingComponent } from './dealer-pending.component';

describe('DealerPendingComponent', () => {
  let component: DealerPendingComponent;
  let fixture: ComponentFixture<DealerPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
