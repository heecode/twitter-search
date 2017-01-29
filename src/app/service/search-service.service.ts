import { Injectable } from '@angular/core';
import {SearchResult} from '../model/search-result';
import {SearchFilter} from '../model/search-filter';
import {SearchInput} from '../model/search-input';
import {TwitterApiService} from './twitter-api.service';


@Injectable()
export class SearchService {
  searchResults: SearchResult[] = [];
  constructor(private twitterApiService: TwitterApiService) { }
  search(searchInput: SearchInput,searchFilter: SearchFilter):SearchService{

  this.searchResults.concat(this.twitterApiService.search(searchInput,searchFilter).searchResults);

  return this
}


}
