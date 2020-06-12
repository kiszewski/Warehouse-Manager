import { Operation } from './../operation.model';
import { WarehouseService } from './../../warehouse/warehouse.service';
import { ProductService } from './../../product/product.service';
import { OperationService } from './../operation.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-operation-create-search',
  templateUrl: './operation-create-search.component.html',
  styleUrls: ['./operation-create-search.component.css']
})
export class OperationCreateComponentSearch implements OnInit {
  warehouseControl = new FormControl()
  productControl = new FormControl()

  operation: Operation = {
    ns: null,
    product_name: '',
    warehouse_name: ''
  }

  warehouse_options: string[] = []
  product_options: string[] = []

  constructor(
      private operationService: OperationService, 
      private productService: ProductService,
      private warehouseService: WarehouseService ) { }

  ngOnInit(): void {
    this.productService.read().subscribe(
      products => products.forEach(
        product => this.product_options.push(product.name)))

    this.warehouseService.read().subscribe(
      warehouses => warehouses.forEach(
        warehouse => this.warehouse_options.push(warehouse.name))) 
  }

  getOperation() {
    this.operationService.operationSubject.next(this.operation)
  }

  createOperation() {
    this.operationService.createOperation(this.operation).subscribe(id => {
      this.operationService.operationSubject.next(this.operation)
      this.operation.ns = null
      this.operation.product_name = ''
      this.operation.warehouse_name = ''
    })
  }
}