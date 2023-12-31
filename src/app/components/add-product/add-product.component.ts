import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/Product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UnitMeasureService } from 'src/app/services/unit-measure-service.service';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  
  
})

export class AddProductComponent implements OnInit {
  @Input() unitMeasurements = [];

  addForm = new FormGroup({
    name: new FormControl(undefined,[
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
  
  @Output() onAddProduct: EventEmitter<Product> = new EventEmitter();

  ngOnInit(): void {
    if (this.unitMeasurements.length > 0){
      this.addForm.patchValue({
        measure: this.unitMeasurements[0]
      })
    }
   }
  
  onSubmit(){
    if (this.addForm.invalid)
        {
          alert('Пожалуйста, проверьте введенные данные')
          return;
        }
    if (typeof this.addForm.value.measure != 'string'){
      const newProduct = {
        name: this.addForm.value.name,
        quantity: this.addForm.value.quantity,
        unit_cost: this.addForm.value.unit_cost,
        measure: this.addForm.value.measure
        
      }
      this.onAddProduct.emit(newProduct);
    
    };
    
    this.addForm.reset();
    
  }
  get name() { return this.addForm.get('name'); }
  get quantity() {return this.addForm.get('quantity');}
  get unit_cost() {return this.addForm.get('unit_cost');}
  get measure(){return this.addForm.get('measure')}
}
