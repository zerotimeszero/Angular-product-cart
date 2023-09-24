import { Component, OnInit } from '@angular/core';
import {Product} from '../../Product'
import { ProductService } from 'src/app/services/product.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { UnitMeasurmentService } from 'src/app/services/unit-measurment.service';
import { UnitMeasurment } from 'src/app/UnitMeasurment';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit{
  products: Product[] = [];
  unitMeasurments: UnitMeasurment[] = [];
  faPlus = faPlus;
  constructor(private productService: ProductService, private unitMeasurementService: UnitMeasurmentService) {

  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => this.products = products);
    this.unitMeasurementService.getUnitMeasurements().subscribe((unitMeasurments) => this.unitMeasurments = unitMeasurments);
  }
  
  deleteProduct(product: Product){
    this.productService
    .deleteProduct(product)
    .subscribe(
      () => this.products = this.products.filter((t) =>
       t.id !== product.id));
  }
  addProduct(product: Product){
    this.productService.addProduct(product).subscribe((product) => this.products.push(product));
  }
}

