import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/Product';
import { validation } from 'src/app/validation';
import { UnitMeasurment } from 'src/app/UnitMeasurment';
import { UnitMeasurmentService } from 'src/app/services/unit-measurment.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})

export class AddProductComponent implements OnInit {

  @Input() unitMeasurments = [];
  constructor (private unitMeasurementService: UnitMeasurmentService ) {

  }

  @Output() onAddProduct: EventEmitter<Product> = new EventEmitter();
  private validation: validation = new validation();
  product_name: string;
  product_quantity: number;
  unit_cost: number;
  unit_measurment_id: number;

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.validation.isInputEmpty(this.product_name) ||
        this.validation.isInputEmpty(this.product_quantity) ||
        this.validation.isInputEmpty(this.unit_cost) ||
        this.product_quantity < 0 || this.unit_cost < 0)
        {
          alert('Пожалуйста, проверьте введенные данные')
          return;
        } //TODO - change the validation
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
