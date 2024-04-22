import { Pipe, PipeTransform } from '@angular/core';
import { ModelProduct } from '../service/producto.model';

@Pipe({
  name: 'filter'
})
// export class FilterPipe implements PipeTransform {

//   transform(value: any, arg: any): any {
//     if (arg === "") return value;
//     const resultProducts = [];
//     for (const product of value) {
//       if(product.title.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
//         resultProducts.push(product)
//     }else ("not found"+ arg)
//   } 
//   return resultProducts
// }
// }


// }
export class FilterPipe implements PipeTransform {
  transform(products: ModelProduct[], page:number = 0, find:string =''): ModelProduct[]{
    if (find.length === 0)
      return products.slice(page, page + 15);


    const filteredProducts = products.filter(produc => produc.title.includes(find))
    return filteredProducts.slice(page, page + 15) ;
  }

  
}
