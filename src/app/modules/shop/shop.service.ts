import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  url: any;
  urlImage: any;
  constructor(private http: HttpClient) {
    this.url = `https://ikoapitest.azurewebsites.net/v1/product`;
  }

  GetAll(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  GetById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }
}
