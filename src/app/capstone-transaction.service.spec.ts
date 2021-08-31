import { TestBed } from '@angular/core/testing';

import { CapstoneTransactionService } from './capstone-transaction.service';

describe('CapstoneTransactionService', () => {
  let service: CapstoneTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapstoneTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
