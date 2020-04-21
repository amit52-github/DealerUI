import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveDataListComponent } from './save-data-list.component';

describe('SaveDataListComponent', () => {
  let component: SaveDataListComponent;
  let fixture: ComponentFixture<SaveDataListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveDataListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
