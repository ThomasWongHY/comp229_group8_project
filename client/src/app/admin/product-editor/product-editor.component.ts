import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  templateUrl: './product-editor.component.html'
})
export class ProductEditorComponent implements OnInit {
  submitForm: FormGroup;
  numRegex = /^-?\d*[.,]?\d{0,2}$/;
  editing = false;
  product: Product = new Product();

  constructor(private repository: ProductRepository,
              private router: Router,
              private activeRoute: ActivatedRoute,
              //private formBuilder: FormBuilder
              )
  {
    this.editing = activeRoute.snapshot.params.mode === 'edit';
    if (this.editing)
    {
      Object.assign(this.product, repository.getProduct(activeRoute.snapshot.params.id));
    }
  }

  get f() { return this.submitForm.controls; }

  ngOnInit(): void {
    // this.submitForm = this.formBuilder.group({
    //   productname: ['', Validators.required],
    //   ptype: ['', Validators.required],
    //   description: ['', Validators.required],
    //   price: ['', Validators.pattern(this.numRegex)],
    //   quantity: ['', Validators.pattern(this.numRegex)]
    // });

  }

  save(form: NgForm): void
  {
    this.repository.saveProduct(this.product);
    alert('Saved successfully');
    this.router.navigateByUrl('/admin/main/products');
  }

}
