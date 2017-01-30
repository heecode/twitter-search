import { Component } from '@angular/core';
import {SearchResult} from './model/search-result';
import {SearchFilter} from './model/search-filter';
import {SearchInput} from './model/search-input';
import {TwitterApiService} from './service/twitter-api.service';
import { SearchService } from './service/search-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{provide:SearchService,useClass:TwitterApiService}]
})
export class AppComponent {
  title = 'Twitter Search';
  searchResults: SearchResult[] = [];
  newSearch : SearchInput = new SearchInput();
  newFilter : SearchFilter = new SearchFilter();
  
  constructor(private searchService:SearchService ) {  }

  search(){
this.searchResults = this.searchService.search(this.newSearch,this.newFilter).searchResults;
  }

  get results() {
    //var items = this.socialMediaDataServiceService.search(this.item);
    return this.searchService.search(this.newSearch,this.newFilter).searchResults;
  }


  

}


