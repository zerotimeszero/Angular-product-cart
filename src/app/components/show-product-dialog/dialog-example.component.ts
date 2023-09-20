import { Component, Inject, Injectable, Input, OnInit } from '@angular/core';
import {Product} from '../../Product'
import { ProductService } from 'src/app/services/product.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Injectable()

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})

export class DialogExampleComponent implements OnInit {
  product: Product;
  constructor(
    public dialogRef: MatDialogRef<DialogExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public id: number, private productService: ProductService
  ) { }

  ngOnInit(){
    this.productService.getProduct(this.id).subscribe((product) => this.product = product)
  }
}
