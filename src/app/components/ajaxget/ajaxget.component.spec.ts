import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxgetComponent } from './ajaxget.component';

describe('AjaxgetComponent', () => {
  let component: AjaxgetComponent;
  let fixture: ComponentFixture<AjaxgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjaxgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
