import { Component, OnInit } from '@angular/core';
// import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  cartProducts: any[] = [];
  subTotal: number = 0;
  saleObj: any =  {
      "SaleId": 0,
      "CustId": 1,
      "SaleDate": new Date(),
      "TotalInvoiceAmount": 0,
      "Discount": 0,
      "PaymentNaration": "Patmm ",
      "DeliveryAddress1": "Plot nio 122",
      "DeliveryAddress2": "Ner ATM",
      "DeliveryCity": "Pune",
      "DeliveryPinCode": "440033",
      "DeliveryLandMark": "ATM"
  };

  ngOnInit(): void {
  }


}
