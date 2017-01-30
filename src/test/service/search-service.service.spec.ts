/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SearchService } from '../../app/service/search-service.service';
import { TwitterApiService } from '../../app/service/twitter-api.service';
import {SearchFilter} from '../../app/model/search-filter';
import {SearchInput} from '../../app/model/search-input';

describe('SearchServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide:SearchService,useClass:TwitterApiService}]
    });
  });

  it('should ...', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));

describe('#search(item)', () => {
  it('should not return anything if search item empty string', inject([SearchService], (service: SearchService) => {
    let searchInput = new SearchInput({
      item:''
    }); 
    var searchFilter = new SearchFilter();
   expect(service.search(searchInput,searchFilter).searchResults).toEqual([]);
  

  }));

   it('should  return anything if search item not empty string', inject([SearchService], (service: SearchService) => {
    let searchInput = new SearchInput({
      item:'heemi'
    }); 
    var searchFilter = new SearchFilter();
  var results = service.search(searchInput,searchFilter);
  var len = results.searchResults;
   expect(len.length).toBeGreaterThan(0);

  }));

});

});
