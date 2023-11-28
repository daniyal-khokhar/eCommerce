import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {  
    searchText: string = '';

    constructor(private searchService: SearchService) {}
  
    ngOnInit(): void {}
  
    onSearchChange(): void {
      this.searchService.setSearchText(this.searchText);
    }

}
