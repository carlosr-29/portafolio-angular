import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  charging = true;
  products: Product[] = []
  productsFilter: Product[] = []

  constructor( private http: HttpClient) {
    this.getProducts()
  }

  private getProducts () {

    return new Promise( (resolve, reject) => {
      this.http.get('https://angular-html-5b9c7.firebaseio.com/productos_idx.json')
        .subscribe( (resp: Product[]) => {
          this.products = resp
          this.charging = false
          resolve()
        });
    })
  }

  getProduct (id: String) {
    return this.http.get(`https://angular-html-5b9c7.firebaseio.com/productos/${ id }.json`)
  }

  searchProduct (term: string) {

    if( this.products.length === 0  ) {
      this.getProducts().then( () => {
        this.filterProducts(term)
      })
    } else {
      this.filterProducts(term)
    }
  }

  private filterProducts(term: string) {
    // this.productsFilter = this.products.filter( product => {
    //   return true
    // })
    term = term.toLowerCase()
    this.productsFilter = []
    this.products.forEach( product => {
      const titleLower = product.titulo.toLowerCase()
      if(product.categoria.indexOf( term ) >= 0 || titleLower.indexOf( term ) >= 0 ){
        this.productsFilter.push(product)
      }
    })
  }
}
