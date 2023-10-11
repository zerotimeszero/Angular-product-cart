import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Measure } from 'src/app/UnitMeasurment';
import { UnitMeasureService } from 'src/app/services/unit-measure-service.service';
import { faTrash,faCheck } from '@fortawesome/free-solid-svg-icons';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-um-list',
  templateUrl: './um-list.component.html',
  styleUrls: ['./um-list.component.scss'],
  animations: [
    trigger('move',[
      state('start',style({
        top: '15px'
      })),
      state('finish',style({
        top: '20px'
      })),
      transition('start => finish', animate('.2s 100ms ease-in')),
      transition('finish => start', animate('.2s 100ms ease-out'))
    ])
      
    
  ]
})
export class UmListComponent implements OnInit {
  state: string = 'start';
  isEnter: boolean = false;
  isBeingChanged: boolean = false;


  addForm = new FormGroup({
    name: new FormControl(undefined,[
      Validators.required
    ])
  })

  changeForm = new FormGroup({
    value: new FormControl(undefined,[
      Validators.required
    ])
  })
  faCheck = faCheck;
  faTrash = faTrash;

  unitMeasurements: Measure[] = [];

  constructor(private umservice: UnitMeasureService){

  }
  ngOnInit() : void {
    this.umservice.getUnitMeasurements().subscribe((unitMeasurements) => this.unitMeasurements = unitMeasurements)
  }
  onAddSubmit() : void{
    const newUnitMeasurement: Measure = {
      value: this.addForm.value.name
    }
    
    this.umservice.addUnitMeasurement(newUnitMeasurement).subscribe((id) => {
       newUnitMeasurement.id = parseInt(id.toString());
       this.unitMeasurements.push(newUnitMeasurement);
    })
    this.addForm.reset();
  }
  deleteUnitMeasurement(um: Measure){
    this.umservice
    .deleteUnitMeasurement(um)
    .subscribe(
      () => this.unitMeasurements = this.unitMeasurements.filter((t) =>
       t.id !== um.id));
  }

  openChangeForm(id: number){
    document.getElementById("um-list__changeName-"+id.toString()).classList.add('active')
    this.isBeingChanged = true;
  }
  closeChangeForm(id: number){
    document.getElementById("um-list__changeName-"+id.toString()).classList.remove('active')
    this.isBeingChanged = false;
    this.changeForm.reset();
  }

  onChangeSubmit(um: Measure){
    this.umservice.updateUnitMeasurements(um.id,this.changeForm.value).subscribe(() =>{
      um.value = this.changeForm.value.value;
    })
    document.getElementById("um-list__changeName-"+um.id.toString()).classList.remove('active')
    this.isBeingChanged = false;
    
  }

  get name() { return this.addForm.get('name'); }
  get value(){return this.changeForm.get('value')}


  onMouseEnter(evt: MouseEvent) {
    console.log('onMouseEnter()');
    this.state = 'start';
    this.isEnter = true;
  }

  onMouseLeave(evt: MouseEvent) {
    console.log('onMouseLeave()');
    this.state = 'finish';
    this.isEnter = false;
  }

  onEnd(event) {
    if (this.isEnter) {
      if (event.toState === 'start') {
        this.state = 'finish';
      }
      else {
        this.state = 'start';
      }
    }
  }
}
