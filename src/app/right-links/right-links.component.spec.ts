import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightLinksComponent } from './right-links.component';

describe('RightLinksComponent', () => {
  let component: RightLinksComponent;
  let fixture: ComponentFixture<RightLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightLinksComponent]
    });
    fixture = TestBed.createComponent(RightLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
