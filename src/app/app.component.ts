import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'ecommerce';
  // cartProducts: any[] = [];
  // subTotal: number = 0;
  // constructor(private productService: ProductService, private router: Router) {
  //   this.productService.cartAddedSubject.subscribe(res=> {
  //     debugger;
      // this.loadCart();
    // })
  
    searchText: string = '';

    constructor(private searchService: SearchService) {}
  
    ngOnInit(): void {}
  
    onSearchChange(): void {
      this.searchService.setSearchText(this.searchText);
    }

  // redirectToSale() {
  //   this.router.navigateByUrl("/sale");
  // }

  // loadCart() {
  //   this.subTotal = 0;
  //   this.productService.getCartItemsByCustId(1).subscribe((res: any)=> {
  //     this.cartProducts = res.data;
  //     this.cartProducts.forEach(element => {
  //         this.subTotal =  this.subTotal + element.productPrice;
  //     });
  //     debugger;
  //   })
  // }
}
