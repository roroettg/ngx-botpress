import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBotpressComponent } from './ngx-botpress.component';

describe('NgxBotpressComponent', () => {
  let component: NgxBotpressComponent;
  let fixture: ComponentFixture<NgxBotpressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxBotpressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBotpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
