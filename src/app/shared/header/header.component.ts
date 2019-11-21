import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public _servicio: InfoPaginaService, private router: Router ) { }

  ngOnInit() {
  }

  searchProduct(termString: String) {
    
    if(termString.length < 1)
      return;

    this.router.navigate(['/search', termString])
  }
}
