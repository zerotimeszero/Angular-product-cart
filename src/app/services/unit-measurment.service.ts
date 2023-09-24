import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import {UnitMeasurment} from "../UnitMeasurment"
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UnitMeasurmentService {
  private apiUrl = "http://localhost:5000/unit_measurements";
  constructor(private http: HttpClient) { }
  getUnitMeasurements(): Observable<UnitMeasurment[]>{
    return this.http.get<UnitMeasurment[]>(this.apiUrl);
  }
}
