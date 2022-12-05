import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable, from } from 'rxjs';
import { Order } from './order.model';

@Injectable()
export class StaticDataSource
{
  private products: Product[] =
  [
    new Product(2, 'Product 2', 'Ptype 1', 'Short Description 2' , 10, 5),
    new Product(1, 'Product 1', 'Ptype 1', 'Short Description 1' , 10, 5),
    new Product(3, 'Product 3', 'Ptype 1', 'Short Description 3' , 10, 3),
    new Product(4, 'Product 4', 'Ptype 1', 'Short Description 4' , 10, 3),
    new Product(5, 'Product 5', 'Ptype 2', 'Short Description 6' , 10, 3),
    new Product(6, 'Product 6', 'Ptype 2', 'Short Description 6' , 10, 3),
    new Product(7, 'Product 7', 'Ptype 2', 'Short Description 7' , 10, 1),
    new Product(8, 'Product 8', 'Ptype 2', 'Short Description 8' , 10, 1),
    new Product(9, 'Product 9', 'Ptype 3', 'Short Description 9' , 10, 1),
    new Product(10, 'Product 10', 'Ptype 3', 'Short Description 10' , 10, 8),
    new Product(11, 'Product 11', 'Ptype 3', 'Short Description 11' , 10, 8),
    new Product(12, 'Product 12', 'Ptype 4', 'Short Description 12' , 10, 8),
    new Product(13, 'Product 13', 'Ptype 4', 'Short Description 13' , 10, 8),
    new Product(14, 'Product 14', 'Ptype 4', 'Short Description 14' , 10, 8),
    new Product(15, 'Product 15', 'Ptype 4', 'Short Description 15' , 10, 8),
  ];

  getProducts(): Observable<Product[]>
  {
    return from([this.products]);
  }

  saveOrder(order: Order): Observable<Order>
  {
    console.log(JSON.stringify(order));
    return from ([order]);
  }
}
