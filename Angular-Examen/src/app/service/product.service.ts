import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {

   constructor() {}

    getAllProducts(): Product[] {
      let products = [{
            name:'Camera',
            brand:'Nikon',
            description:'Dit is een professionele camera voor afbeeldingen vast te leggen.',
            price:165.50
          },
            {
            name:'Iphone X',
            brand:'Apple',
            description:'Dit is een smartphone dat full face recognition bevat.',
            price:799
            }

      ];
      for (let i=0; i< products.length; i++){
        let product = products[i];
        let result = product;
        products.push(result);
      }
      return products;
    }
}
