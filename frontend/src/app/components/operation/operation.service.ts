import { Operation } from './operation.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  ns = new BehaviorSubject(0)

  baseUrl = "http://localhost:3000/operations"

  constructor(private http: HttpClient) { }

  read(): Observable<Operation[]> {
    return this.http.get<Operation[]>(this.baseUrl)
  }

  readOperations(ns): Observable<Operation[]> {
    return ns == 0 ? this.http.get<Operation[]>(this.baseUrl) : this.http.get<Operation[]>(`${this.baseUrl}/${ns}`) 
  }
}
