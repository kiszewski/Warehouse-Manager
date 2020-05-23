import { Operation } from './../operation.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation-results',
  templateUrl: './operation-results.component.html',
  styleUrls: ['./operation-results.component.css']
})
export class OperationResultsComponent implements OnInit {
  dataSource: Operation[] = [
    {ns: 1, product_id: 1, warehouse_id: 1.0079, date: 'H'},
    {ns: 2, product_id: 1, warehouse_id: 4.0026, date: 'He'},
    {ns: 3, product_id: 1, warehouse_id: 6.941, date: 'Li'},
    {ns: 4, product_id: 1, warehouse_id: 9.0122, date: 'Be'},
    {ns: 5, product_id: 1, warehouse_id: 10.811, date: 'B'},
    {ns: 6, product_id: 1, warehouse_id: 12.0107, date: 'C'},
    {ns: 7, product_id: 1, warehouse_id: 14.0067, date: 'N'},
    {ns: 8, product_id: 1, warehouse_id: 15.9994, date: 'O'},
    {ns: 9, product_id: 1, warehouse_id: 18.9984, date: 'F'},
    {ns: 10, product_id: 1, warehouse_id: 20.1797, date: 'Ne'},
  ];

  columns: string[] = ['ns', 'product_id', 'warehouse_id', 'date'];

  constructor() { }

  ngOnInit(): void {
  }

}
