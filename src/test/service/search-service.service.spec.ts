/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SearchService } from '../../app/service/search-service.service';
import { TwitterApiService } from '../../app/service/twitter-api.service';

describe('SearchServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide:SearchService,useClass:TwitterApiService]
    });
  });

  it('should ...', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));
});
