import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewAllListPage } from './view-all-list.page';

describe('ViewAllListPage', () => {
  let component: ViewAllListPage;
  let fixture: ComponentFixture<ViewAllListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
