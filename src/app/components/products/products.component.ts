import { Component, OnInit, OnChanges } from '@angular/core';
import {Product} from '../../Product'
import { ProductService } from 'src/app/services/product.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit{
  products: Product[] = [];
  faPlus = faPlus;

  constructor(private productService: ProductService) {

  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => this.products = products);
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
