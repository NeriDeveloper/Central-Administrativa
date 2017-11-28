import {Injectable, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Filial} from "../_models/Filial";


@Injectable()
export class AniversarioService {

    constructor(private http: Http) {
    }

    pegaDados() {
        return this.http.get('assets/dados/aniversarios.json');
    }

}
