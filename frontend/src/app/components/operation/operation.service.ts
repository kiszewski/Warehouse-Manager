import { Operation } from './operation.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  baseUrl = "http://localhost:3000/operations"

  operation: Operation = {
    ns: null,
    product_name: '',
    warehouse_name: ''
  }

  operationSubject = new BehaviorSubject(this.operation)

  constructor(private http: HttpClient) { }

  readOperations(operation: Operation): Observable<Operation[]> {
    const { ns, product_name, warehouse_name } = operation

    return (ns === null && product_name === '' && warehouse_name === '') ?
      this.http.get<Operation[]>(this.baseUrl) :
        this.http.get<Operation[]>(`${this.baseUrl}/?ns=${ns}&product_name=${product_name}&warehouse_name=${warehouse_name}`)
  }

  createOperation(operation: Operation): Observable<Number> {
    return this.http.post<Number>(this.baseUrl, operation)
  }
}
