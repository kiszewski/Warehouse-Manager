import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  constructor(private productService: ProductService) { }

  products: Product[]
  dataSource

  columns = ['id', 'name', 'price', 'actions']
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator  
  
  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      this.dataSource = new MatTableDataSource<Product>(this.products)
      this.dataSource.paginator = this.paginator
    })
  }  

}
