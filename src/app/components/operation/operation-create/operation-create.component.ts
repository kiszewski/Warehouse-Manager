import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-operation-create',
  templateUrl: './operation-create.component.html',
  styleUrls: ['./operation-create.component.css']
})
export class OperationCreateComponent implements OnInit {
  warehouseControl = new FormControl()
  productControl = new FormControl()

  NS: string = ""
  warehouse_options: string[] = ['Matriz', 'Filial A', 'Filial B']
  product_options: string[] = ['Iphone 11', 'Iphone 12', 'Iphone X']

  constructor() { }

  ngOnInit(): void {
    console.log(this.productControl)
  }



}