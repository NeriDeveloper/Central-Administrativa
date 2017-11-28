import { Component, OnInit } from '@angular/core';
import {Radio} from './radio';
import {RadioSerice} from './radio.service';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})


export class RadioComponent implements OnInit {

    radios: Radio[];
    radioService: RadioSerice;

  constructor(_radioService: RadioSerice) {
      this.radioService = _radioService;
  }


  ngOnInit() {
      this.radios = this.radioService.getRadio();
  }

}
