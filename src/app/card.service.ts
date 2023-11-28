import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  getCards(): any[] {
    return [
      {
        imgSrc: '../../assets/testimonial1.png',
        title: 'Card 1 Title',
        text: 'Description for Card 1.',
        buttonText: 'Button 1',
      },
      {
        imgSrc: '../../assets/testimonial2.png',
        title: 'Card 2 Title',
        text: 'Description for Card 2.',
        buttonText: 'Button 2',
      },
      {
        imgSrc: '../../assets/testimonial3.png',
        title: 'Card 3 Title',
        text: 'Description for Card 3.',
        buttonText: 'Button 3',
      },
      {
        imgSrc: '../../assets/testimonial1.png',
        title: 'Card 4 Title',
        text: 'Description for Card 4.',
        buttonText: 'Button 4',
      },
      {
        imgSrc: '../../assets/testimonial2.png',
        title: 'Card 5 Title',
        text: 'Description for Card 5.',
        buttonText: 'Button 5',
      },
      {
        imgSrc: '../../assets/testimonial3.png',
        title: 'Card 6 Title',
        text: 'Description for Card 6.',
        buttonText: 'Button 6',
      },
      {
        imgSrc: '../../assets/testimonial3.png',
        title: 'Card 6 Title',
        text: 'Description for Card 6.',
        buttonText: 'Button 6',
      } ,
       {
        imgSrc: '../../assets/child.png',
        title: 'Card 6 Title',
        text: 'Description for Card 6.',
        buttonText: 'Button 6',
      },
        {
        imgSrc: '../../assets/child1.png',
        title: 'Card 6 Title',
        text: 'Description for Card 6.',
        buttonText: 'Button 6',
      },
      {
        imgSrc: '../../assets/child2.png',
        title: 'Card 6 Title',
        text: 'Description for Card 6.',
        buttonText: 'Button 6',
      }
    ];
  }
}
