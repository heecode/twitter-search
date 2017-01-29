/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TwitterApiService } from '../../app/service/twitter-api.service';
import {SearchInput} from '../../app/model/search-input';
import {SearchFilter} from '../../app/model/search-filter';

describe('TwitterApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitterApiService]
    });
  });

  it('should ...', inject([TwitterApiService], (service: TwitterApiService) => {
    expect(service).toBeTruthy();
  }));

  describe('#search(searchInput: SearchInput,searchFilter: SearchFilter)', () => {
  it('should not return anything if searchInput empty string', inject([TwitterApiService], (service: TwitterApiService) => {
   let searchInput = new SearchInput({
      item:''
    }); 
    var searchFilter = new SearchFilter();

   expect(service.search(searchInput,searchFilter).searchResults).toEqual([]);
  

  }));


  it('should return  search item if have item string', inject([TwitterApiService], (service: TwitterApiService) => {
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
