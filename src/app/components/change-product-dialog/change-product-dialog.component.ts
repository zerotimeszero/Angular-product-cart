import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Measure } from 'src/app/UnitMeasurment';
@Component({
  selector: 'app-change-product-dialog',
  templateUrl: './change-product-dialog.component.html',
  styleUrls: ['./change-product-dialog.component.scss']
})
export class ChangeProductDialogComponent implements OnInit {
  product: Product = this.data.product
  unitMeasurements: Measure[] = this.data.unitMeasurements
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
    ]),
    measure: new FormControl(undefined,[
      Validators.required
    ])
  })

  constructor(
    public dialogRef: MatDialogRef<ChangeProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA)  public data: any,
     private productService: ProductService,
    
    
  ) { }
  
  ngOnInit(): void {
    this.changeForm = new FormGroup({
      name: new FormControl(this.product.name),
      quantity: new FormControl(this.product.quantity),
      unit_cost: new FormControl(this.product.unit_cost),
      measure: new FormControl(this.product.measure.value)
    })
    if (this.unitMeasurements.length > 0){
      this.changeForm.patchValue({
        measure: this.unitMeasurements.filter((item) => item.id == this.product.measure.id)[0]
      })
  }
}
  
  onFormSubmit(){
    this.productService.updateProduct(this.product.id, this.changeForm.value).
    subscribe(() =>{
      this.product.name = this.changeForm.value.name;
      this.product.quantity = this.changeForm.value.quantity;
      this.product.unit_cost = this.changeForm.value.unit_cost;
      this.product.measure = this.changeForm.value.measure;
    })
  }
  get name() { return this.changeForm.get('name'); }
  get quantity() {return this.changeForm.get('quantity');}
  get unit_cost() {return this.changeForm.get('unit_cost');}
  get measure(){return this.changeForm.get('measure')}
  
}
