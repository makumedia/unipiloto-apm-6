/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SalesInvoiceService } from './sales-invoice.service';

describe('SalesInvoiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalesInvoiceService]
    });
  });

  it('should ...', inject([SalesInvoiceService], (service: SalesInvoiceService) => {
    expect(service).toBeTruthy();
  }));
});
