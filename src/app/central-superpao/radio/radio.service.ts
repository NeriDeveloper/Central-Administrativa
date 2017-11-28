/**
 * Created by Juliano Sirtori on 25/04/2017.
 */
import {Injectable} from '@angular/core';
import {Radio} from './radio';

@Injectable()
export class RadioSerice {
    radios: Radio[] =
        [
            {
                nome: 'loja1',
                link: 'https://goo.gl/CFtRB1'
            },
            {
                nome: 'loja2',
                link: 'https://goo.gl/paAeSd'
            },
            {
                nome: 'loja3',
                link: 'https://goo.gl/EFQgCa'
            },
            {
                nome: 'loja5',
                link: 'http://www.playtronicproducoes.com.br/rl/acesso/loga.php?login=oba&senha=oba'
            },
            {
                nome: 'loja6',
                link: 'http://www.playtronicproducoes.com.br/rl/acesso/loga.php?login=superpao06&senha=superpao061'
            },
            {
                nome: 'loja7',
                link: 'http://www.playtronicproducoes.com.br/rl/acesso/loga.php?login=baratao07&senha=baratao07'
            },
            {
                nome: 'loja8',
                link: 'http://www.playtronicproducoes.com.br/rl/acesso/loga.php?login=superpao08&senha=superpao08'
            },
            {
                nome: 'loja9',
                link: 'http://www.playtronicproducoes.com.br/rl/acesso/loga.php?login=superpao09&senha=superpao09'
            },
            {
                nome: 'loja10',
                link: 'http://www.playtronicproducoes.com.br/rl/acesso/loga.php?login=superpao10&senha=superpao10'
            },
            {
                nome: 'loja11',
                link: 'http://www.playtronicproducoes.com.br/rl/acesso/loga.php?login=baratao11&senha=baratao11'
            },
            {
                nome: 'loja12',
                link: 'http://www.playtronicproducoes.com.br/rl/acesso/loga.php?login=superpao12&senha=superpao12'
            },
            {
                nome: 'loja13',
                link: 'http://www.playtronicproducoes.com.br/rl/acesso/loga.php?login=baratao13&senha=baratao13'
            },
            {
                nome: 'loja14',
                link: 'http://www.playtronicproducoes.com.br/rl/acesso/loga.php?login=superpao14&senha=superpao14'
            },
            {
                nome: 'loja16',
                link: 'http://www.playtronicproducoes.com.br/rl/acesso/loga.php?login=superpao16&senha=superpao16'
            },
            {
                nome: 'loja17',
                link: 'http://www.playtronicproducoes.com.br/rl/acesso/loga.php?login=superpao17&senha=superpao17'
            },
            {
                nome: 'loja21',
                link: 'http://www.playtronicproducoes.com.br/rl/acesso/loga.php?login=superpao21&senha=superpao21'
            },
            {
                nome: 'loja22',
                link: 'http://www.playtronicproducoes.com.br/rl/acesso/loga.php?login=superpao22&senha=superpao22'
            },
            {
                nome: 'Radio - Contigência',
                link: 'https://goo.gl/CFtRB1'
            },
        ];

    getRadio(): Radio[] {
        return this.radios;
    }
}