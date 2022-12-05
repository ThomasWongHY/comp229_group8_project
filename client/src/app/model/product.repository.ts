import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';
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

  getProducts(ptypes: string = null): Product[]
  {
    return this.products
      .filter(b => ptypes == null || ptypes === b.ptype);
  }

  getProduct(id: number): Product
  {
    return this.products.find(b => b._id === id);
  }
  
  getPTypes(): string[]
  {
    return this.ptypes;
  }

  saveProduct(savedProduct: Product): void
  {
    console.log(savedProduct);
    if (savedProduct._id === null || savedProduct._id === 0 || savedProduct._id === undefined)
    {
      console.log('T');
      this.dataSource.addProduct(savedProduct).subscribe(b => {
        this.products.push(savedProduct);
      });
    }
    else
    {
      console.log('F');
      this.dataSource.updateProduct(savedProduct).subscribe(product => {
        this.products.splice(this.products.findIndex(b => b._id === savedProduct._id), 1, savedProduct);
      });
    }
  }

  deleteProduct(deletedProductID: number): void
  {
    this.dataSource.deleteProduct(deletedProductID).subscribe(product => {
      this.products.splice(this.products.findIndex(b => b._id === deletedProductID), 1);
    });
  }
}
