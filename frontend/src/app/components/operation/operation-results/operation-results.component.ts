import { FormControl } from '@angular/forms';
import { WarehouseService } from './../../warehouse/warehouse.service';
import { ProductService } from './../../product/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OperationService } from './../operation.service';
import { Operation } from './../operation.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation-results',
  templateUrl: './operation-results.component.html',
  styleUrls: ['./operation-results.component.css']
})
export class OperationResultsComponent implements OnInit {
  warehouseControl = new FormControl()
  productControl = new FormControl()

  operation: Operation = {
    ns: null,
    product_name: '',
    warehouse_name: '',
    date: ''
  }

  warehouse_options: string[] = []
  product_options: string[] = []

  dataSource: Operation[]

  columns: string[] = ['ns', 'product_name', 'warehouse_name', 'date'];

  constructor(private operationService: OperationService) { }

  ngOnInit(): void {
    this.operationService.operationSubject.subscribe(operation => {
      this.operationService.readOperations(operation).subscribe(operation => {
        this.dataSource = operation
      })
    })
  }
}
