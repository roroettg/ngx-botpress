import { TestBed } from '@angular/core/testing';

import { NgxBotpressService } from './ngx-botpress.service';

describe('NgxBotpressService', () => {
  let service: NgxBotpressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBotpressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
