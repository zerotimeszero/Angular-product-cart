import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Measure } from '../UnitMeasurment';

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
  getUnitMeasurements(): Observable<Measure[]> {
    return this.http.get<Measure[]>(this.apiUrl)
  }
  deleteUnitMeasurement(unitMeasurement: Measure): Observable<Measure>{
    const url = `${this.apiUrl}/${unitMeasurement.id}`;
    return this.http.delete<Measure>(url);
  }
  addUnitMeasurement(unitMeasurement: Measure): Observable<any>{
    return this.http.post<Measure>(this.apiUrl,unitMeasurement,httpOptions)
  }
  getUnitMeasurement(id: number): Observable<Measure>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Measure>(url);
  }
  updateUnitMeasurements(id: number,data: any): Observable<Measure>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Measure>(url,data);
  }
}
