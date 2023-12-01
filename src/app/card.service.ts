import { Injectable } from '@angular/core';
import { Tag } from './shared/Tag';
import { Cards } from './shared/food';
@Injectable({
  providedIn: 'root'
})
export class CardService {
 
  getAllCardsByTag(tag: string): Cards[] {
    return tag.toLowerCase() === "all" ? this.getCards()
      : this.getCards().filter((card) =>
        card.tags?.includes(tag.toLowerCase())
      );
  }

  getAllTag(): Tag[] {
    return [
      { name: "all", count: 20 },
      { name: "woman", count: 4 },
      { name: "man", count: 5 },
      { name: "child", count: 4 },
    ];
  }

  getCards(): Cards[] {
    return [
     
      { 
        id: '2',     
        name:"Genuine Shaving Machine",
        imgSrc: '../../assets/man14.jpg',
        price:"92.00$",
        title: 'NEW PRODUCT',
        category:"man",
        text: 'Coat Wallet for Men (SAME DAY DISPATCH) Delivery time 2 to 4 Working Days.',
        buttonText: 'Add',
        information:'9174 Fashion Mens Quartz Watch Luxury Stainless Steel Men Wristwatch Quartz Wristwatches 3Bar Waterproof Bracelet For Mens Relogio Masculino aaa',
        tags:["man"],
      relatedimage: ['1','10','11','12','13','14','2', '3', '4',],

      },
      { 
        id: '3',     
        name:"Hand Phones Genuine",
        imgSrc: '../../assets/man13.jpg',
        price:"92.00$",
        title: 'NEW PRODUCT',
        category:"man",
        text: 'Coat Wallet for Men (SAME DAY DISPATCH) Delivery time 2 to 4 Working Days.',
        buttonText: 'Add',
        information:'9174 Fashion Mens Quartz Watch Luxury Stainless Steel Men Wristwatch Quartz Wristwatches 3Bar Waterproof Bracelet For Mens Relogio Masculino aaa',
        tags:["man"],
        relatedimage: ['1','10','11','12','13','14','2', '3', '4',],

      },
      {
        id:"4",
        name:"Tan-Brown Ear Birds",
        imgSrc: '../../assets/man12.jpg',
        price:"92.00$",
        title: 'NEW PRODUCT',
        category:"man",
        text: 'Coat Wallet for Men (SAME DAY DISPATCH) Delivery time 2 to 4 Working Days.',
        buttonText: 'Add',
        information:'9174 Fashion Mens Quartz Watch Luxury Stainless Steel Men Wristwatch Quartz Wristwatches 3Bar Waterproof Bracelet For Mens Relogio Masculino aaa',
        tags:["man"],
        relatedimage: ['1','10','11','12','13','14','2', '3', '4',],

      },
      {
        id:"5",
        name:"Coat Tony Porfume",
        imgSrc: '../../assets/fashion1.jpg',
        price:"92.00$",
        title: 'NEW PRODUCT',
        category:"woman",
        text: '(SAME DAY DISPATCH) Delivery time 2 to 4 Working Days.',
        buttonText: 'Add',
        information:'9174 Fashion Mens Quartz Watch Luxury Stainless Steel Men Wristwatch Quartz Wristwatches 3Bar Waterproof Bracelet For Mens Relogio Masculino aaa',
        tags:["woman"],
        relatedimage: ['1','10','11','12','13','14','2', '3', '4',],

      },
      {
        id:"8",
        name:"Trust Creame for ladies",
        imgSrc: '../../assets/fashion3.jpg',
        price:"92.00$",
        title: 'NEW PRODUCT',
        category:"woman",
        text: 'DISPATCH) Delivery time 2 to 4 Working Days.',
        buttonText: 'Add',
        information:'9174 Fashion Mens Quartz Watch Luxury Stainless Steel Men Wristwatch Quartz Wristwatches 3Bar Waterproof Bracelet For Mens Relogio Masculino aaa',
        tags:["woman"],
        relatedimage: ['1','10','11','12','13','14','2', '3', '4',],

      },
      {
        id:"6",
        name:"Sadoer soup ",
        imgSrc: '../../assets/fashion2.jpg',
        price:"92.00$",
        title: 'NEW PRODUCT',
        category:"woman",
        text: 'Coat Wallet Delivery time 2 to 4 Working Days.',
        buttonText: 'Add',
        information:'9174 Fashion Mens Quartz Watch Luxury Stainless Steel Men Wristwatch Quartz Wristwatches 3Bar Waterproof Bracelet For Mens Relogio Masculino aaa',
        tags:["woman"],
        relatedimage: ['1','10','11','12','13','14','2', '3', '4',],

      },
      { 
        id: '1',     
        name:"Make LipStik",
        imgSrc: '../../assets/fashion4.jpg',
        price:"92.00$",
        title: 'NEW PRODUCT',
        category:"woman",
        text: 'Coat time 2 to 4 Working Days. Coat Wallet for Men (SAME DAY DISPATCH) Delivery time 2 to 4 Working Days  srtkhfksdlk jdshjksjoi Coat Wallet for Men (SAME)',
        buttonText: 'Add',
        information:'9174 Fashion Mens Quartz Watch Luxury Stainless Steel Men Wristwatch Quartz Wristwatches 3Bar Waterproof Bracelet For Mens Relogio Masculino aaa',
        tags:["woman"],
        relatedimage: ['1','10','11','12','13','14','2', '3', '4',],

      },
      {
        id:"7",
        name:"Black Pods 12",
        imgSrc: '../../assets/man11.jpg',
        price:"92.00$",
        title: 'NEW PRODUCT',
        category:"man",
        text: 'Coat Wallet for Men (SAME DAY DISPATCH) Delivery time 2 to 4 Working Days.',
        buttonText: 'Add',
        information:'9174 Fashion Mens Quartz Watch Luxury Stainless Steel Men Wristwatch Quartz Wristwatches 3Bar Waterproof Bracelet For Mens Relogio Masculino aaa',
        tags:["man"],
        relatedimage: ['1','10','11','12','13','14','2', '3', '4',],

      },
    
      {
        id:"9",
        name:"Best MOM Ever",
        imgSrc: '../../assets/fashion5.jpg',
        price:"92.00$",
        title: 'NEW PRODUCT',
        category:"woman",
        text: 'For WoMen (SAME DAY DISPATCH) Delivery time 2 to 4 Working Days.',
        buttonText: 'Add',
        information:'9174 Fashion Mens Quartz Watch Luxury Stainless Steel Men Wristwatch Quartz Wristwatches 3Bar Waterproof Bracelet For Mens Relogio Masculino aaa',
        tags:["woman"],
        relatedimage: ['1','10','11','12','13','14','2', '3', '4',],

      } ,
       {
        id:"10",
        name:"Toys for child",
        imgSrc: '../../assets/baby3.jpeg',
        price:"92.00$",
        title: 'NEW PRODUCT',
        category:"child",
        text: 'Coat Wallet for Baby (SAME DAY DISPATCH) Delivery time 2 to 4 Working Days.',
        buttonText: 'Add',
        information:'9174 Fashion Mens Quartz Watch Luxury Stainless Steel Men Wristwatch Quartz Wristwatches 3Bar Waterproof Bracelet For Mens Relogio Masculino aaa',
        tags:["child"],
        relatedimage: ['1','10','11','12','13','14','2', '3', '4',],

      },
      {
        id:"14",
        name:"Baby SpiderMan Suit",
        imgSrc: '../../assets/baby2.webp',
        price:"92.00$",
        title: 'new product',
        category:"child",
        text: 'this is new stock available.',
        buttonText: 'Add',
        information : '9174 Fashion Mens Quartz Watch Luxury Stainless Steel Men Wristwatch Quartz Wristwatches 3Bar Waterproof Bracelet For Mens Relogio Masculino ' ,
        tags:["child"],
        relatedimage: ['1','10','11','12','13','14','2', '3', '4',],

      },        
      {       
        id:"11",
        name:"Baby Toy",
        imgSrc: '../../assets/baby4.jpeg',
        price:"92.00$",
        title: 'NEW PRODUCT',
        category:"child",
        text: 'Coat Wallet for Men (SAME DAY DISPATCH) Delivery time 2 to 4 Working Days.',
        buttonText: 'Add',
        information:'9174 Fashion Mens Quartz Watch Luxury Stainless Steel Men Wristwatch Quartz Wristwatches 3Bar Waterproof Bracelet For Mens Relogio Masculino aaa',
        tags:["child"],
        relatedimage: ['1','10','11','12','13','14','2', '3', '4',],

      },
      {
        id:"12",
        name:"Toys",
        imgSrc: '../../assets/baby5.jpeg',
        price:"92.00$",
        title: 'new product',
        category:"child",
        text: 'this is new stock available. Coat Wallet for Men (SAME DAY DISPATCH) Delivery time 2 to 4 Working Days hfhhhfhfhfhf hxzkjdshkj sdjkhsjhfs',
        buttonText: 'Add',
        information :'9174 Fashion Mens Quartz Watch Luxury Stainless Steel Men Wristwatch Quartz Wristwatches 3Bar Waterproof Bracelet For Mens Relogio Masculino ',
         tags:["child"],
        relatedimage: ['1','10','11','12','13','14','2', '3', '4',],

      },
      {
        id:"13",
        name:"Baby Diapers",
        imgSrc: '../../assets/baby1.jpg',
        price:"92.00$",
        title: 'new product',
        category:"child",
        text: 'this is new stock available. ',
        buttonText: 'Add',
        information: '9174 Fashion Mens Quartz Watch Luxury Stainless Steel Men Wristwatch Quartz Wristwatches 3Bar Waterproof Bracelet For Mens Relogio Masculino',
        tags:["child"],
        relatedimage: ['1','10','11','12','13','14','2', '3', '4',],

      },
   

    ];
    
  }

}
