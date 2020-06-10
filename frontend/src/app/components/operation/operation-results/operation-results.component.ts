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
    product_name: null,
    warehouse_name: null,
    date: null
  }

  warehouse_options: string[] = []
  product_options: string[] = []

  dataSource: Operation[]

  columns: string[] = ['ns', 'product_name', 'warehouse_name', 'date'];

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

    this.operationService.read().subscribe(operations => {
      this.dataSource = operations
    })
  }

  getOperation(): void {
    console.log('clicou');
    
    this.operationService.readByNS(this.operation.ns).subscribe(operations => {
      this.dataSource = operations
    })
  }
}
