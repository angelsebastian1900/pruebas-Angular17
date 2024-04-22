import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from  '@angular/material/form-field';
import { TableProductsComponent } from './table-products/table-products.component' ;
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { CardProductsComponent } from './card-products/card-products.component';
import { HeaderComponent } from './components/head/header.component';
import { DetailsProductsComponent } from './details-products/details-products.component';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipe } from './pipe/filter.pipe'; // <-- import the module
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    TableProductsComponent,
    CardProductsComponent,
    HeaderComponent,
    DetailsProductsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,  
     MatSortModule,
     MatInputModule
     

    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
