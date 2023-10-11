import { Component, OnInit } from '@angular/core';
import {Product} from '../../Product'
import { ProductService } from 'src/app/services/product.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Measure } from 'src/app/UnitMeasurment';
import { animate, style, transition, trigger } from '@angular/animations';
import { UnitMeasureService } from 'src/app/services/unit-measure-service.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    trigger('addProductFadeIn',[
      transition(':enter', [
        style({
           maxHeight: 0,
           opacity: 0
          }),
        animate(75, style({maxHeight: '200px',opacity: 1 })),
      ]),
      transition(':leave', [
        animate(75, style({ maxHeight: 0,opacity: 0 }))
      ])
      
    ])
    
  ]
})

export class ProductsComponent implements OnInit{
  products: Product[] = [];
  unitMeasurements: Measure[] = [];
  isAddMenuOpened = false;
  
  

  faPlus = faPlus;
  constructor(private productService: ProductService, private unitMeasurementService: UnitMeasureService) {

  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => this.products = products);
    this.unitMeasurementService.getUnitMeasurements().subscribe((unitMeasurements) => this.unitMeasurements = unitMeasurements)
  
  }
  
  deleteProduct(product: Product){
    this.productService
    .deleteProduct(product)
    .subscribe(
      () => this.products = this.products.filter((t) =>
       t.id !== product.id));
  }
  addProduct(product: Product){
    this.productService.addProduct(product).subscribe((id) =>{
       product.id = id;
       this.products.push(product);
      });
  }

  openAddMenu(){
    const circlePlus = document.getElementById('circle-plus')
    if (circlePlus.classList.contains('closed')){
      circlePlus.classList.remove('closed')
      circlePlus.classList.add('opened')
    } else if (circlePlus.classList.contains('opened')){
      circlePlus.classList.remove('opened')
      circlePlus.classList.add('closed')
    } else {
      circlePlus.classList.add('opened')
    }
    
    this.isAddMenuOpened = !this.isAddMenuOpened;

  }
}

