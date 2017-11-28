import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Filial} from '../_models/Filial';
import {AniversarioService} from './aniversario.service';

@Component({
    selector: 'app-aniversario',
    templateUrl: './aniversario.component.html',
    styleUrls: ['./aniversario.component.css']
})
export class AniversarioComponent implements OnInit {

    data: Array<Filial>;
    colaboradores: any;
    filial: string;

    constructor(private http: Http, private _aniServ: AniversarioService) {
        this.colaboradores = [];
        this.filial =  'Clique em uma loja ao lado';
    }

    ngOnInit() {
        console.log('teste');
        this._aniServ.pegaDados().subscribe(res => {
           this.trataDados(res);
        });
    }

    private trataDados(res: any) {
        this.data = res.json();
        console.log(this.data);
    }

    pegaFilial(colaboradores: any,  filial: string) {
        this.colaboradores = colaboradores;
        this.filial = filial;
    }


}

