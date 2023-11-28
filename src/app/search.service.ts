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

// Ye Angular mein ek service hai jo search-related functionality ko manage karta hai.
//  Niche diye gaye tafseeli explanation mein main aapko samjhaunga:

// import { Injectable } from '@angular/core';:
//  Yeh line Angular ki core module se Injectable decorator ko import karti hai, jiska istemal service banane ke liye hota hai.
// 
// import { BehaviorSubject } from 'rxjs';: Yeh line RxJS library se BehaviorSubject ko import karti hai. BehaviorSubject ek Observable hai jo apne subscribers ko current value aur future changes dono provide karta hai.

// @Injectable({ providedIn: 'root' }): Yeh @Injectable decorator class par lagaya gaya hai jisse Angular service ke roop mein iska istemal ho sake. providedIn: 'root' yeh batata hai ki yeh service root module mein available hoga.

// private searchTextSubject = new BehaviorSubject<string>('');: Yeh ek private member hai jo BehaviorSubject ka ek instance hai. Yahan, initial value ke roop mein ek khali string di gayi hai.

// get searchText$() { return this.searchTextSubject.asObservable(); }: Yeh ek getter function hai jo searchTextSubject ki observable version ko provide karta hai. Isse, service ke bahar se is observable par subscribe kiya ja sakta hai.

// setSearchText(searchText: string): void { this.searchTextSubject.next(searchText); }: Yeh ek function hai jo searchTextSubject ko update karta hai. Jab koi new search text aata hai, to ye function use karke us text ko BehaviorSubject par next 
// kar deta hai, jisse subscribers ko inform milta hai ki search text mein changes hue hain.

// Is service ka istemal kisi component mein ho sakta hai jise search-related logic ke liye manage karna hai. Component search bar mein koi input hota hai, aur jab user kuch type karta hai to setSearchText function ko call karke search text update hota hai.
//  Ab, jo bhi component is service ki observable property searchText$ par subscribe karega, usko latest search text milta rahega, jise woh phir apne UI par display kar sake.