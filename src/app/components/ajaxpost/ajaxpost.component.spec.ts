import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxpostComponent } from './ajaxpost.component';

describe('AjaxpostComponent', () => {
  let component: AjaxpostComponent;
  let fixture: ComponentFixture<AjaxpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjaxpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
