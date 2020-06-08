import { Operation } from './operation.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  baseUrl = "http://localhost:3000/operations"

  constructor(private http: HttpClient) { }

  read(): Observable<Operation[]> {
    return this.http.get<Operation[]>(this.baseUrl)
  }
}
