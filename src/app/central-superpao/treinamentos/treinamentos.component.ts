import { Component, OnInit } from '@angular/core';
import {TreinamentosService} from './treinamentos.service';
import {Router} from '@angular/router';
import {Treinamento} from '../_models/treinamento';

@Component({
  selector: 'app-treinamentos',
  templateUrl: './treinamentos.component.html',
  styleUrls: ['./treinamentos.component.css']
})
export class TreinamentosComponent implements OnInit {

  treinamento: Array<Treinamento>;
  documentos: any;
  nome: any;

  constructor(private _treiServ: TreinamentosService, private _route: Router) {
    this.documentos = [];
  }

  ngOnInit() {
    this._treiServ.pegaDados().subscribe(res => {
      this.trataDados(res);
    });
  }

  trataDados(res: any) {
    this.treinamento = res.json();
    console.log(this.treinamento);
  }

  pegaTreinamento(dados: any, nome: any) {
    this.documentos = dados;
    this.nome = nome;
  }

  baixarDoc(dados: any) {
    this._route.navigate(['/treinamentos/' + this.nome, dados]);
  }
}
