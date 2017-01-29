/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TwitterApiService } from '../../app/service/twitter-api.service';

describe('TwitterApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitterApiService]
    });
  });

  it('should ...', inject([TwitterApiService], (service: TwitterApiService) => {
    expect(service).toBeTruthy();
  }));
});
