import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCurrentComponent } from './tab-current.component';

describe('TabCurrentComponent', () => {
  let component: TabCurrentComponent;
  let fixture: ComponentFixture<TabCurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
