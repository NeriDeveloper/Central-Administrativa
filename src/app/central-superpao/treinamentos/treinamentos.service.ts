import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Treinamento} from 'app/central-superpao/_models/treinamento';

@Injectable()
export class TreinamentosService {

  constructor(private http: Http) { }

   pegaDados() {
   return this.http.get('assets/dados/treinamento.json');
  }
}
