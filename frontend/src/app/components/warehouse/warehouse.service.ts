import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Warehouse } from './warehouse.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  baseUrl = "http://localhost:3000/warehouses"

  constructor(private http: HttpClient) { }

  read(): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(this.baseUrl)
    // return this.http.get<Warehouse[]>('http://localhost/warehouses')
  }
}
