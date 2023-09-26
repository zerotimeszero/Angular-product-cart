import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-change-product-dialog',
  templateUrl: './change-product-dialog.component.html',
  styleUrls: ['./change-product-dialog.component.scss']
})
export class ChangeProductDialogComponent implements OnInit {
  changeForm = new FormGroup({
    name: new FormControl('',[
      Validators.required
    ]),
    quantity: new FormControl(undefined,[
      Validators.required,
      Validators.min(0)
    ]),
    unit_cost: new FormControl(undefined,[
      Validators.required,
      Validators.min(0)
    ])
  })
  constructor(
    public dialogRef: MatDialogRef<ChangeProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product, private productService: ProductService
  ) { }
  ngOnInit(): void {
    this.changeForm = new FormGroup({
      name: new FormControl(this.product.name),
      quantity: new FormControl(this.product.quantity),
      unit_cost: new FormControl(this.product.unit_cost)
    })
  }
  onFormSubmit(){
    this.productService.updateProduct(this.product.id, this.changeForm.value).
    subscribe(() =>{
      this.product.name = this.changeForm.value.name;
      this.product.quantity = this.changeForm.value.quantity;
      this.product.unit_cost = this.changeForm.value.unit_cost;
    })
  }
  get name() { return this.changeForm.get('name'); }
  get quantity() {return this.changeForm.get('quantity');}
  get unit_cost() {return this.changeForm.get('unit_cost');}
}
