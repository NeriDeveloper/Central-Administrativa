import {Component, OnInit} from '@angular/core';
import {HomeService} from "./home.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    dados: any;

    constructor(private _service: HomeService) {
    }

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
