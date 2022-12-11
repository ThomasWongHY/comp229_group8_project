import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../model/auth.service';

import { User } from '../../model/user.model';

@Component({
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  public user: User;
  public errorMessage: string;

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void 
  {
    this.user = new User();
  }

  register(form: NgForm): void
  {
    if (form.valid)
    {
      // console.log(form.)
      console.log(this.user.username)
      console.log(this.user.email)
      console.log(this.user.password)
      console.log(this.user.displayName)
      // perform reegistration
      this.auth.register(this.user).subscribe(data => {
        if (data.success)
        {
          console.log('---------')
          console.log(data)
          console.log('---------')
          this.auth.storeUserData(data.token, data.user);
          this.router.navigateByUrl('admin/main');

          //this.router.navigateByUrl('admin/auth');
        }
      });
    }
    else
    {
      this.errorMessage = 'Form Data Invalid';
    }
  }

}
