import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Loja} from '../loja';
import {LojaService} from '../loja.service';


@Component({
  selector: 'app-loja-detail',
  templateUrl: './loja-detail.component.html',
  styleUrls: ['./loja-detail.component.css']
})
export class LojaDetailComponent implements OnInit {

  id: number;
  loja: Loja;
  lojaService: LojaService;

  constructor(private route: ActivatedRoute, _lojaService: LojaService) {
    this.id = this.route.snapshot.params.id;
    this.lojaService = _lojaService;
  }
  ngOnInit() {
    this.loja = this.lojaService.getLojaById(this.id);
  }
}
