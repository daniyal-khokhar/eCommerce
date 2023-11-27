import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchTextSubject = new BehaviorSubject<string>('');

  get searchText$() {
    return this.searchTextSubject.asObservable();
  }

  setSearchText(searchText: string): void {
    this.searchTextSubject.next(searchText);
  }
}