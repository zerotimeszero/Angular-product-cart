import { Component, Output, EventEmitter } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  constructor (){
  }
  ngOnInit(): void {
  }
  @Output() onAddProduct: EventEmitter<Product> = new EventEmitter();
  product_name: string;
  product_quantity: number;
  unit_cost: number;
  onSubmit(){
    if (!this.product_name || !this.product_quantity || !this.unit_cost){
          alert('Please enter all the data!')
          return;
        }
    const newProduct = {
      name: this.product_name,
      quantity: this.product_quantity,
      unit_cost: this.unit_cost
    };

    this.onAddProduct.emit(newProduct);
    
    this.product_name = undefined;
    this.product_quantity = undefined;
    this.unit_cost = undefined;
  }
}
