import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class LinksUteisService {

  constructor(private _http: Http) {}
  getDados() {
   return this._http.get('assets/dados/links_uteis.json');
  }

}
