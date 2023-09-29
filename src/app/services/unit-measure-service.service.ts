import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnitMeasurement } from '../UnitMeasurment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class UnitMeasureService {
  // private apiUrl = "http://localhost:8080/measure";
  private apiUrl = "http://localhost:5000/measure";
  constructor(private http: HttpClient) { }
  getUnitMeasurements(): Observable<UnitMeasurement[]> {
    return this.http.get<UnitMeasurement[]>(this.apiUrl)
  }
  deleteUnitMeasurement(unitMeasurement: UnitMeasurement): Observable<UnitMeasurement>{
    const url = `${this.apiUrl}/${unitMeasurement.id}`;
    return this.http.delete<UnitMeasurement>(url);
  }
  addUnitMeasurement(unitMeasurement: UnitMeasurement): Observable<UnitMeasurement>{
    return this.http.post<UnitMeasurement>(this.apiUrl,unitMeasurement,httpOptions)
  }
  getUnitMeasurement(id: number): Observable<UnitMeasurement>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<UnitMeasurement>(url);
  }
  updateUnitMeasurements(id: number,data: any): Observable<UnitMeasurement>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<UnitMeasurement>(url,data);
  }
}
