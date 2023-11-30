import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { ActivatedRoute } from '@angular/router';
import { Cards } from '../shared/food';
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  card: Cards | undefined;
  cards : Cards[] = [];


  constructor(private cardService: CardService, private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.card = this.cardService.getCards().find(card => card.id === id.toString());
    });
  }
  
}
