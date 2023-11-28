import { Component } from '@angular/core';
import { CardService } from '../card.service';

 interface Card {
  imgSrc: '../../assets/golden1.png';
  title: string;
  text: string;
  buttonText: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  cards: Card[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cards = this.cardService.getCards();
  }
}


