import { Component } from '@angular/core';
import { ProdService } from '../Services/prod.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  prodList:any[]=[];
  constructor(private prodserv:ProdService){}
  ngOnInit() {
    this.prodList=this.prodserv.getAllProducts();
  }
}
