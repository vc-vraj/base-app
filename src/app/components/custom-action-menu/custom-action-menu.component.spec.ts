import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomActionMenuComponent } from './custom-action-menu.component';

describe('CustomActionMenuComponent', () => {
  let component: CustomActionMenuComponent;
  let fixture: ComponentFixture<CustomActionMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomActionMenuComponent]
    });
    fixture = TestBed.createComponent(CustomActionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
