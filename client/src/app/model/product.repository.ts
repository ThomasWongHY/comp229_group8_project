import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class ProductRepository
{
  private products: Product[] = [];
  private ptypes: string[] = [];

  constructor(private dataSource: RestDataSource)
  {
    dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.ptypes = data.map(b => b.ptype)
        .filter((a, index, array) => array.indexOf(a) === index).sort();
    });
  }

  getProducts(ptype: string = null): Product[]
  {
    return this.products
      .filter(b => ptype == null || ptype === b.ptype);
  }

  getProduct(id: number): Product
  {
    return this.products.find(b => b._id === id);
  }

  getPTypes(): string[]
  {
    return this.ptypes;
  }
}
