import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  constructor(private headerService: HeaderService) { 
    this.headerService.headerData = {
      icon: "swap_horiz",
      title: "Movimentações",
      url: "/operations"
    }
  }

  ngOnInit(): void {
    console.log('carregou componente principal');
    
  }

}
