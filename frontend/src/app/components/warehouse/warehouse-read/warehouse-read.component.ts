import { WarehouseService } from './../warehouse.service';
import { Warehouse } from '../warehouse.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warehouse-read',
  templateUrl: './warehouse-read.component.html',
  styleUrls: ['./warehouse-read.component.css']
})
export class WarehouseReadComponent implements OnInit {
  warehouses: Warehouse[];

  constructor(private warehouseService: WarehouseService) { }

  ngOnInit(): void {
    this.warehouseService.read().subscribe(warehouses => {
      this.warehouses = warehouses
    })
  }

}
