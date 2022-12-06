import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/order.model';
import { OrderRepository } from 'src/app/model/order.repository';

@Component({
  templateUrl: './order-table.component.html',
})
export class OrderTableComponent implements OnInit
{
  includeShipped = false;

  constructor(private repository: OrderRepository,
              private router: Router) { }

  ngOnInit(): void {
  }

  getOrders(): Order[]
  {
    return this.repository.getOrders().filter(o => this.includeShipped || !o.shipped);
  }

  reloadCurrentRoute(){
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  markShipped(order: Order): void
  {
    order.shipped = (order.shipped) ? false : true;
    this.repository.updateOrder(order);
    alert('The order is shipped.');
    this.reloadCurrentRoute();
    //this.router.navigateByUrl('/admin/main/orders');
  }

  delete(id: number): void
  {
    if (confirm('Are you sure?'))
    {
      this.repository.deleteOrder(id);
    }
    else
    {
      this.router.navigateByUrl('/admin/main/orders');
    }
  }

}
