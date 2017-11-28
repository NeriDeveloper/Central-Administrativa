import {Component, OnInit} from '@angular/core';
import {Loja} from './loja';
import {LojaService} from './loja.service';


@Component({
    selector: 'app-lojas',
    templateUrl: './lojas.component.html',
    styleUrls: ['./lojas.component.css']
})
export class LojasComponent implements OnInit {

    lojas: Loja[] = [];
    dados: any;
    lojaFilter: any = { nome: '' };

    constructor(private _lojasSevice: LojaService) {}

    ngOnInit() {
        this._lojasSevice.getDados().subscribe(res => {
            this.trataDados(res);
        });
    }

    trataDados(res: any) {
        this.dados = res.json();
        console.log(this.dados);
    }

}
