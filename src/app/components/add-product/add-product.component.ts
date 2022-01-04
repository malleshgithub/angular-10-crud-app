import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product = {
    productname: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  saveProduct(): void {
    const data = {
      productname: this.product.productname,
      description: this.product.description
    };

    this.productService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newProduct(): void {
    this.submitted = false;
    this.product = {
      productname: '',
      description: '',
      published: false
    };
  }

}
