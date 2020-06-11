import { Operation } from './operation.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  operation: Operation = {
    ns: null,
    product_name: '',
    warehouse_name: '',
    date: ''
  }

  operationSubject = new BehaviorSubject(this.operation)

  baseUrl = "http://localhost:3000/operations"

  constructor(private http: HttpClient) { }

  read(): Observable<Operation[]> {
    return this.http.get<Operation[]>(this.baseUrl)
  }

  readOperations(operation: Operation): Observable<Operation[]> {
    const { ns, product_name, warehouse_name } = operation

    return (ns === null && product_name === '' && warehouse_name === '') ?
      this.http.get<Operation[]>(this.baseUrl) : 
      this.http.get<Operation[]>(`${this.baseUrl}/?ns=${ns}&product_name=${product_name}&warehouse_name=${warehouse_name}`)
  }
}
