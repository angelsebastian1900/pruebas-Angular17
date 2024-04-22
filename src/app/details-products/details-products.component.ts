import { Component, OnInit } from '@angular/core';
import { ModelProduct } from '../service/producto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.component.html',
  styleUrl: './details-products.component.css'
})
export class DetailsProductsComponent implements OnInit {
  
  datosProduct: ModelProduct[] = [];
  title: string;
  id: number;
  description: string;
  category: string;
  image: string;
  price: number;
    

  constructor(private apiService: ApiService,
              private route: ActivatedRoute){}


  ngOnInit(): void {
    let idProduct = this.route.snapshot.paramMap.get("id")
    console.log(idProduct);
    this.apiService.getProduct(idProduct).subscribe(data => {
       console.log(data);
       this.title = data.title;
       this.image = data.image;
       this.description = data.description;
       this.price = data.price;
       this.category = data.category;

    })
  }

  // product_list: ProductConstructor[] = [];;
// id: number;
// nombre: string;
// marca: string;
// valor: number;
// descripcion: string;
// categoria: string;
// imagen: string;
// //product: any;

// constructor(private route: ActivatedRoute,
//   private apiService: ApiService,
//   //private _router:Router
//   ){}

// ngOnInit()  { 
//   
//   console.log(idProduct);
//     // this.route.paramMap.subscribe(params => {
//     //   this.product = this.apiService[+params.get('id')];
//     // });
//       // this.index = this.route.snapshot.params['id'];
//       // this.index = this.route.snapshot.params['id'];
//       //**name proviene de una app-routing.module.ts y es una de las rutas o redireccionamientos */
//       // if(this.index){
//       //   let producto: ModelProduct = this.apiService.encontrarProducto(this.index);
//       //   this.nombre = producto.title;
//       //   this.valor = producto.price;
//       //   this.categoria = producto.category;
//       //   this.descripcion = producto.description;
//       //   this.imagen = producto.image;
//       // }
  
//     // this.route.paramMap.subscribe(params => {
//     //   this.product = this.route.snapshot.params['id'];
//     // });  
  
//   }

}

