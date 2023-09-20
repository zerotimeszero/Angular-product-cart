import { Component, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})

export class AddProductComponent {
  @Output() onAddProduct: EventEmitter<Product> = new EventEmitter();
  product_name: string;
  product_quantity: number;
  unit_cost: number;
  onSubmit(){
    if (!this.product_name || !this.product_quantity || !this.unit_cost
        || (this.product_quantity < 0) || (this.unit_cost < 0)){
          alert('Пожалуйста, проверьте введенные данные')
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
