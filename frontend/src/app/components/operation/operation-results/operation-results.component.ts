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

  dataSource: Operation[]

  columns: string[] = ['ns', 'product_name', 'warehouse_name', 'date'];

  constructor(
    private operationService: OperationService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.operationService.ns.subscribe(ns => {
      this.operationService.readOperations(ns).subscribe(operation => {
        this.dataSource = operation
      })
    })
  }
}
