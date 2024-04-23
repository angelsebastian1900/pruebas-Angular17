import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {   InfoApiresponse, ModelProduct } from './producto.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlP:string = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient){}


  urlbuscador: string = 'http://192.168.0.101:8080/GSDApi/ListaPrecios/' ;
  
  


  
  //**tarjetas de los productos */
  // getProducts():Observable<InfoApiresponse>{
  //   return this.http.get<InfoApiresponse>(this.url)
  // }
  //************************/


  //**de las tarjetas de productos y e momento la tabla sin paginador */
  getData():Observable<any>{
      return this.http.get<any>(this.urlP)
    }
  //***************************************************************** */
    

  //**para obtener la informacion de un producto por su id */
    getProduct(id: any):Observable<ModelProduct>{
        let dir = this.urlP + "/" + id;
        return this.http.get<ModelProduct>(dir)
  }
  /******************************************************* */
}
 // private urlApi = 'https://fakestoreapi.com/products'
  
  // constructor(private http: HttpClient) { }

  // public getData():Observable<any>{
  //   return this.http.get<any>(this.urlApi)
  // }