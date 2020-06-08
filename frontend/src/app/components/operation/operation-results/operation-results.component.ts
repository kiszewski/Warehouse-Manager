import { OperationService } from './../operation.service';
import { Operation } from './../operation.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation-results',
  templateUrl: './operation-results.component.html',
  styleUrls: ['./operation-results.component.css']
})
export class OperationResultsComponent implements OnInit {

  dataSource: Operation[]

  columns: string[] = ['ns', 'product_name', 'warehouse_name', 'date'];

  constructor(private operationService: OperationService) { }

  ngOnInit(): void {
    this.operationService.read().subscribe(operations => {
      this.dataSource = operations
    })
  }

}
