import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../card.service';
import { Cards } from '../shared/food';
import { Tag } from '../shared/Tag';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  tags: Tag[] = [];
  cards: Cards[] = [];
  
  constructor(private cardService: CardService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.tags = this.cardService.getAllTag();
    this.cards = this.cardService.getCards();

    this.route.params.subscribe(params => {
      const tag = params['tag']; // Use 'tag', not 'tag.Name'
      
      if (tag) {
        this.cards = this.cardService.getAllCardsByTag(tag);
      } else {
        this.cards = this.cardService.getCards();
      }
    });
    this.tags = this.cardService.getAllTag();
  }
}
