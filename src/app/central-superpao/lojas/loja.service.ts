import {Loja} from './loja';
import {Injectable, OnInit} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class LojaService implements OnInit {
    lojas: Loja[];
    constructor(private _http: Http) {
        this._http.get('assets/dados/lojas.json').subscribe(res => {
            this.trataDados(res);
        });

    }
    ngOnInit(): void {
    }
    getDados() {
        return this._http.get('assets/dados/lojas.json');
    }
    getLojaById(id: number): Loja {
        return this.lojas[id - 1];
    }
    getLojas(): Loja[] {
        return this.lojas;
    }

    private trataDados(res: any) {
       this.lojas = res.json();
       console.log(this.lojas);
    }
}