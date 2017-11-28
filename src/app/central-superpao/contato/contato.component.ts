import { Component, OnInit } from '@angular/core';
import {LojaService} from '../lojas/loja.service';
import {Loja} from "../lojas/loja";

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  lojas: Loja[] = [];
  constructor(private lojasService: LojaService) { }

  ngOnInit() {
    this.lojas = this.lojasService.getLojas();
  }

}
