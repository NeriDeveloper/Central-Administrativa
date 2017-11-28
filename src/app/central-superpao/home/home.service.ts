import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class HomeService {

    constructor(private http: Http) {}
    getDados() {
        return this.http.get('assets/dados/home.json');
    }

}
