import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BookStoreComponent } from '../book-store/book-store.component';
import { On9StoreComponent } from '../on9-store/on9-store.component';

@Injectable()
export class StoreFirstGuard
{
  private firstNavigation = true;

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
    if (this.firstNavigation)
    {
      this.firstNavigation = false;
      if (route.component !== On9StoreComponent)
      {
        this.router.navigateByUrl('/product-list');
        return false;
      }
    }
    return true;
  }
}
