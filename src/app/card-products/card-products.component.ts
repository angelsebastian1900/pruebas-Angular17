import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrl: './card-products.component.css'
})
export class CardProductsComponent {
  data: any  [] =[]; //jalowin chavo para los productos
  page:number;

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    // this.apiService.getProducts().subscribe(
      
    //   // response =>{
    //   //   console.log(response);
        
    //   //      this.dataSource.data = response.products
        
        
    //   // }
      
    // )
    this.apiService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    })
    
  }
}
