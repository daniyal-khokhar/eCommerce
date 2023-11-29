import { Injectable } from '@angular/core';
import { Tag } from './shared/Tag';
import { Cards } from './shared/food';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  getAllCardsByTag(tag: string): Cards[] {
    return tag.toLowerCase() === "All"
      ? this.getCards()
      : this.getCards().filter((Card) =>
          Card.tags?.includes(tag.toLowerCase())
        );
  }
    getAllTag():Tag[]{
        return [
          {name: "All", count:20},
          {name: "Woman", count:4},
          {name: "Man", count:5},
          {name: "Child", count:4},
        //   {name: "Soup", count:5},
        //   {name: "Burgur", count:3},
    
        ]
      }
  getCards(): Cards[] {
    return [
      {
       
        name:"test",
        imgSrc: '../../assets/testimonial1.png',
        title: 'new member',
        category:"woman",
        text: 'Description for Card.',
        buttonText: 'Add',
        tags:["Woman"]
      },
      {
        name:"test",
        imgSrc: '../../assets/testimonial2.png',
        title: 'new member',
        category:"man",
        text: 'Description for Card.',
        buttonText: 'Add',
        tags:["Man"]
      },
      {
        name:"test",
        imgSrc: '../../assets/testimonial3.png',
        title: 'new member',
        category:"woman",
        text: 'Description for Card.',
        buttonText: 'Add',
        tags:["Woman"]
      },
      {
        name:"test",
        imgSrc: '../../assets/testimonial1.png',
        title: 'new member',
        category:"woman",
        text: 'Description for Card.',
        buttonText: 'Add',
        tags:["Woman"]
      },
      {
        name:"test",
        imgSrc: '../../assets/testimonial2.png',
        title: 'new member',
        category:"man",
        text: 'Description for Card.',
        buttonText: 'Add',
        tags:["Man"]
      },
      {
        name:"test",
        imgSrc: '../../assets/testimonial3.png',
        title: 'new member',
        category:"woman",
        text: 'Description for Card.',
        buttonText: 'Add',
        tags:["Woman"]
      },
      {
        name:"test",
        imgSrc: '../../assets/testimonial3.png',
        title: 'new member',
        category:"woman",
        text: 'Description for Card.',
        buttonText: 'Add',
        tags:["Woman"]
      } ,
       {
        name:"test",
        imgSrc: '../../assets/child.jpg',
        title: 'new member',
        category:"child",
        text: 'Description for Card.',
        buttonText: 'Add',
        tags:["Child"]
      },
        {
        name:"test",
          imgSrc: '../../assets/child2.jpeg',
        title: 'new member',
        category:"child",
        text: 'Description for Card.',
        buttonText: 'Add',
        tags:["Child"]
      },
      {
        name:"test",
        imgSrc: '../../assets/child3.jpeg',
        title: 'new member',
        category:"child",
        text: 'Description for Card.',
        buttonText: 'Add',
        tags:["Child"]
      }
    ];
  }

}
