import { Injectable } from '@angular/core';
import {SearchResult} from '../model/search-result';
import {SearchFilter} from '../model/search-filter';
import {SearchInput} from '../model/search-input';

@Injectable()
export class TwitterApiService {
  searchResults: SearchResult[] = [];

  constructor() { }
search(searchInput: SearchInput):TwitterApiService{
    this.searchResults = [];
    var maxItems = 15;
    var item = searchInput.item;
    if (item != null && item != ""){
    for (var _i=0;_i<maxItems;_i++){
     
      let searchItem = new SearchResult({
        id: _i,
        title: "title " + item + "_" + _i,
        objectLink: "http://search.twitter.com/" + item + _i,
        thumbnailUrl: item + _i + ".png",
        description: item+ _i+" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper, risus eget sodales interdum, ex neque mattis libero, in facilisis mauris "+
        +"magna sed diam. Maecenas ac semper metus, nec molestie justo." 
      })
      this.searchResults.push(searchItem);
    }
    }
    
    return this;
  }


}
