import { Operation } from './../operation.model';
import { Router } from '@angular/router';
import { WarehouseService } from './../../warehouse/warehouse.service';
import { ProductService } from './../../product/product.service';
import { OperationService } from './../operation.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

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
    product_name: null,
    warehouse_name: null,
    date: null
  }

  warehouse_options: string[] = []
  product_options: string[] = []

  constructor(
      private operationService: OperationService, 
      private productService: ProductService,
      private warehouseService: WarehouseService,
      private router: Router ) { }

  ngOnInit(): void {
    this.productService.read().subscribe(
      products => products.forEach(
        product => this.product_options.push(product.name)))

    this.warehouseService.read().subscribe(
      warehouses => warehouses.forEach(
        warehouse => this.warehouse_options.push(warehouse.name))) 
  }

  getOperation(): void {
    this.router.navigate([`/operations/${this.operation.ns}`])
  }
}