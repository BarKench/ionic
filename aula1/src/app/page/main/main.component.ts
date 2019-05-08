import { Component, OnInit } from '@angular/core';
import { Produto } from '../../produto/produto';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private url: string = environment.url_rest + "produtos";
  private produtos:Observable<Produto[]>;
 

  constructor(
    private http: HttpClient
  ) {
  }

  public getprodutos() {
    return this.produtos;
    return this.http.get<Produto[]>(this.url);
  }


  ngOnInit() {
  }

}
