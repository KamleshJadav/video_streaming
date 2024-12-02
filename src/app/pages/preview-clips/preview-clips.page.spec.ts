import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreviewClipsPage } from './preview-clips.page';

describe('PreviewClipsPage', () => {
  let component: PreviewClipsPage;
  let fixture: ComponentFixture<PreviewClipsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewClipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
