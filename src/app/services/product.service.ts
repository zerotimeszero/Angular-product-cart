import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Product} from '../Product';
import {HttpClient, HttpHeaders} from "@angular/common/http"
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  // private apiUrl = "http://localhost:8080/product";
  private apiUrl = "http://localhost:5000/product";
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
  } 
  deleteProduct(product: Product): Observable<Product>{
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.delete<Product>(url);
  }
  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.apiUrl,product,httpOptions)
  }
  getProduct(id: number): Observable<Product>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url);
  }
  updateProduct(id: number,data: any): Observable<Product>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Product>(url,data);
  }
}
