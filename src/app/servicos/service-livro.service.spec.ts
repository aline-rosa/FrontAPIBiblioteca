import { TestBed } from '@angular/core/testing';

import { ServiceLivroService } from './service-livro.service';

describe('ServiceLivroService', () => {
  let service: ServiceLivroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceLivroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
