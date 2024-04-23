import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ModelProduct } from '../service/producto.model';
// import {  InfoApiresponse, ModelProduct } from '../service/producto.model';
// import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrl: './table-products.component.css'
})
export class TableProductsComponent implements OnInit{
  page:number = 0;
  filterPost:string = '';
  data:any  [] =[];
  find:string = '';

  // displayedColumns: string[] = ['idProducto', 'existencia',' producto', 'marca', 'unidadMedida', 'publicoIva'];
  // dataSource: MatTableDataSource<ModelProduct[]>;

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;


  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }


  constructor(private apiService: ApiService,
              private route: ActivatedRoute){}

  

    //jalowin chavo, es para los productos

  ngOnInit(): void {
    // this.apiService.getProducts().subscribe(
      
    //    response =>{
    //      console.log(response);
        
    //         this.dataSource.data = response.products             
    //    }
      
    // )
    // let idProduct = this.route.snapshot.paramMap.get("id")
    // console.log(idProduct);
    
    
  

    this.apiService.getData().subscribe(data => {
      this.data = data;
      // this.dataSource = data
         console.log(this.data);
    })
    

  }
  nextPage(){
    this.page += 15
  }
  previusPage(){
    if(this.page > 0)
    this.page -= 15
  }

  searchProduct(find: string){
    this.page = 0; 
    this.find = find;
    // console.log(this.find);

  }
  
  
        
      

  
}
// data: any[] = [];

//   constructor(private apiService: ApiService){}


//   ngOnInit(): void {
//     this.apiService.getData().subscribe(data => {
//       this.data = data;
//       console.log(this.data);
//     })
//   }


  
  
// ];
  
  // llenarData(){
  //   this.apiService.getData().subscribe(data => {
  //     this.data = data;
  //     console.log(this.data);
  //   })
  // }
  


  
  
  