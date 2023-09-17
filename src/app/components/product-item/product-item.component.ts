import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../Product';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { EditProductComponent } from '../edit-product/edit-product.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit{
  @Input() product: Product;
  @Output() onDeleteProduct: EventEmitter<Product> = new EventEmitter();
  faTimes = faTimes;
  faPen = faPen;

  constructor(private _dialog: MatDialog){

  }
  ngOnInit(): void {

  }
  onDelete(product){
    this.onDeleteProduct.emit(product);
  }
  openEditForm(){
    this._dialog.open(EditProductComponent)
  }
}
