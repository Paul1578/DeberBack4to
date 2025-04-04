import { TestBed } from '@angular/core/testing';

import { ApiCostumerService } from './api-costumer.service';

describe('ApiCostumerService', () => {
  let service: ApiCostumerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCostumerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
