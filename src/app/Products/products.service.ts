import { Injectable } from '@angular/core';

export interface ProductInterface {
  id: number;
  name: string;
  type: string;
  year: number;
  imdb: number;
  stars: number;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  Products: ProductInterface[] = [
    {
      id: 1,
      name: 'Shawshank Redemption',
      type: 'movie',
      imdb: 9.3,
      stars: 5,
      year: 1994,
      image: 'https://m.media-amazon.com/images/I/71715eBi1sL.jpg',
    },
    {
      id: 2,
      name: 'The Lord of the Rings: Return of The King',
      type: 'movie',
      imdb: 9.0,
      stars: 5,
      year: 2003,
      image:
        'https://dvvy6louqcr7j.cloudfront.net/vista/HO00012670/heroPoster/LOTR-The-Return-of-the-King-Extended-Ed.png',
    },
    {
      id: 3,
      name: 'Breaking Bad',
      type: 'series',
      imdb: 9.5,
      stars: 5,
      year: 2008,
      image:
        'https://cdn.evrimagaci.org/I8ZKPw8IEhUx3bXB1c58sRL2hZA=/evrimagaci.org%2Fpublic%2Fmi_media%2Fa3bb95fb0057fdc5eb4685f6ad39e7ee.jpeg',
    },
    {
      id: 4,
      name: 'Friends',
      type: 'series',
      imdb: 8.9,
      stars: 5,
      year: 1994,
      image:
        'https://cdn1.ntv.com.tr/gorsel/zkZoUnc_rU2mMGtvImNsHg.jpg?width=1000&mode=crop&scale=both',
    },
    {
      id: 5,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 5.6,
      stars: 2,
      year: 2005,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 6,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 5.6,
      stars: 2,
      year: 2008,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 7,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 6.5,
      stars: 3,
      year: 2015,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 8,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 6.0,
      stars: 3,
      year: 2012,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 9,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 7,
      stars: 2,
      year: 2005,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 10,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 4,
      stars: 2,
      year: 2008,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 11,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 6.5,
      stars: 3,
      year: 2015,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 12,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 7.5,
      stars: 3,
      year: 2012,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 13,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 5.6,
      stars: 2,
      year: 2005,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 14,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 5.6,
      stars: 2,
      year: 2008,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 15,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 6.5,
      stars: 3,
      year: 2015,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 16,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 6.0,
      stars: 3,
      year: 2012,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 17,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 7,
      stars: 2,
      year: 2005,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 18,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 4,
      stars: 2,
      year: 2008,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 19,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 6.5,
      stars: 3,
      year: 2015,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 20,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 7.5,
      stars: 3,
      year: 2012,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 21,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 5.6,
      stars: 2,
      year: 2005,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 22,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 5.6,
      stars: 2,
      year: 2008,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 23,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 6.5,
      stars: 3,
      year: 2015,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 24,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 6.0,
      stars: 3,
      year: 2012,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 25,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 7,
      stars: 2,
      year: 2005,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 26,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 4,
      stars: 2,
      year: 2008,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 27,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 6.5,
      stars: 3,
      year: 2015,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 28,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 7.5,
      stars: 3,
      year: 2012,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 29,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 5.6,
      stars: 2,
      year: 2005,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 30,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 5.6,
      stars: 2,
      year: 2008,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 31,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 6.5,
      stars: 3,
      year: 2015,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 32,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 6.0,
      stars: 3,
      year: 2012,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 33,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 7,
      stars: 2,
      year: 2005,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 34,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 4,
      stars: 2,
      year: 2008,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 35,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 6.5,
      stars: 3,
      year: 2015,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 36,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 7.5,
      stars: 3,
      year: 2012,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 37,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 5.6,
      stars: 2,
      year: 2005,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 38,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 5.6,
      stars: 2,
      year: 2008,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 39,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 6.5,
      stars: 3,
      year: 2015,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 40,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 6.0,
      stars: 3,
      year: 2012,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 41,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 7,
      stars: 2,
      year: 2005,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 42,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 4,
      stars: 2,
      year: 2008,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 43,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 6.5,
      stars: 3,
      year: 2015,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 44,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 7.5,
      stars: 3,
      year: 2012,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 45,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 5.6,
      stars: 2,
      year: 2005,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 46,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 5.6,
      stars: 2,
      year: 2008,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 47,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 6.5,
      stars: 3,
      year: 2015,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 48,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 6.0,
      stars: 3,
      year: 2012,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 49,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 7,
      stars: 2,
      year: 2005,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 50,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 4,
      stars: 2,
      year: 2008,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 51,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 6.5,
      stars: 3,
      year: 2015,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 52,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 7.5,
      stars: 3,
      year: 2012,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 53,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 5.6,
      stars: 2,
      year: 2005,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 54,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 5.6,
      stars: 2,
      year: 2008,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 55,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 6.5,
      stars: 3,
      year: 2015,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 56,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 6.0,
      stars: 3,
      year: 2012,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 57,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 7,
      stars: 2,
      year: 2005,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 58,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 4,
      stars: 2,
      year: 2008,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 59,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 6.5,
      stars: 3,
      year: 2015,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 60,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 7.5,
      stars: 3,
      year: 2012,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 61,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 5.6,
      stars: 2,
      year: 2005,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 62,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 5.6,
      stars: 2,
      year: 2008,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 63,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 6.5,
      stars: 3,
      year: 2015,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 64,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 6.0,
      stars: 3,
      year: 2012,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 65,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 7,
      stars: 2,
      year: 2005,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 66,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 4,
      stars: 2,
      year: 2008,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 67,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 6.5,
      stars: 3,
      year: 2015,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 68,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 7.5,
      stars: 3,
      year: 2012,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 69,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 5.6,
      stars: 2,
      year: 2005,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 70,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 5.6,
      stars: 2,
      year: 2008,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 71,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 6.5,
      stars: 3,
      year: 2015,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 72,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 6.0,
      stars: 3,
      year: 2012,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 73,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 7,
      stars: 2,
      year: 2005,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 74,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 4,
      stars: 2,
      year: 2008,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 75,
      name: 'PlaceHolder',
      type: 'series',
      imdb: 6.5,
      stars: 3,
      year: 2015,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
    {
      id: 76,
      name: 'PlaceHolder',
      type: 'movie',
      imdb: 7.5,
      stars: 3,
      year: 2012,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    },
  ];
  getAllProducts(): ProductInterface[] {
    return this.Products;
  }
  getRandomProduct() {
    let rand = Math.floor(Math.random() * this.Products.length);
    return this.Products[rand];
  }
  getShowcaseProducts() {
    let showcase: ProductInterface[] = [];
    for (let i = 0; i < 5; i++) {
      let element = this.getRandomProduct();
      if (
        showcase.some((item) => {
          return item.id === element.id;
        })
      ) {
        element = this.getRandomProduct();
        i--;
      } else {
        showcase.push(element);
      }
    }
    return showcase;
  }

  getAlikeProducts() {
    let alike: ProductInterface[] = [];
    for (let i = 0; i < 15; i++) {
      let element = this.getRandomProduct();
      if (
        alike.some((item) => {
          return item.id === element.id;
        })
      ) {
        element = this.getRandomProduct();
        i--;
      } else {
        alike.push(element);
      }
    }
    return alike;
  }
  getProductById(id: number) {
    return this.Products.find((product) => {
      return product.id === id;
    });
  }
  constructor() {}
}
