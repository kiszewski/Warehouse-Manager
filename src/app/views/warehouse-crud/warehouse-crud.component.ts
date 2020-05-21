import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-warehouse-crud',
  templateUrl: './warehouse-crud.component.html',
  styleUrls: ['./warehouse-crud.component.css']
})
export class WarehouseCrudComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.headerData = {
      icon: 'store',
      title: 'Almoxarifados',
      url: '/warehouses'
    }
  }

  ngOnInit(): void {
  }

}
