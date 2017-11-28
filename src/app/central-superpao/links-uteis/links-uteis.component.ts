import { Component, OnInit } from '@angular/core';
import {LinksUteisService} from './links-uteis.service';

@Component({
  selector: 'app-links-uteis',
  templateUrl: './links-uteis.component.html',
  styleUrls: ['./links-uteis.component.css']
})
export class LinksUteisComponent implements OnInit {

  dados: any;
  constructor(private _service: LinksUteisService) { }

  ngOnInit() {
    this._service.getDados().subscribe(res => {
      this.trataDados(res);
    });
  }

  trataDados(res: any) {
    this.dados = res.json();
    console.log(this.dados);
  }

}
