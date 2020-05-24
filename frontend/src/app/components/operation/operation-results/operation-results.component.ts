import { Operation } from './../operation.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation-results',
  templateUrl: './operation-results.component.html',
  styleUrls: ['./operation-results.component.css']
})
export class OperationResultsComponent implements OnInit {
  dataSource: Operation[] = [
    {ns: 1, product_name: 'Iphone', warehouse_name: 'Matriz', date: '11/12/2020'},
    {ns: 2, product_name: 'Iphone', warehouse_name: 'Matriz', date: '11/12/2020'},
    {ns: 3, product_name: 'Iphone', warehouse_name: 'Matriz', date: '11/12/2020'},
    {ns: 4, product_name: 'Iphone', warehouse_name: 'Matriz', date: '11/12/2020'},
    {ns: 5, product_name: 'Iphone', warehouse_name: 'Matriz', date: '11/12/2020'},
    {ns: 6, product_name: 'Iphone', warehouse_name: 'Matriz', date: '11/12/2020'},
    {ns: 7, product_name: 'Iphone', warehouse_name: 'Matriz', date: '11/12/2020'},
    {ns: 8, product_name: 'Iphone', warehouse_name: 'Matriz', date: '11/12/2020'},
    {ns: 9, product_name: 'Iphone', warehouse_name: 'Matriz', date: '11/12/2020'},
    {ns: 10, product_name: 'Iphone', warehouse_name: 'Matriz', date: '11/12/2020'},
  ];

  columns: string[] = ['ns', 'product_name', 'warehouse_name', 'date'];

  constructor() { }

  ngOnInit(): void {
  }

}
