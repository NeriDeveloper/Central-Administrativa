import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {ProcedimentoDetailComponent} from './central-superpao/procedimentos/procedimento-detail/procedimento-detail.component';
import {HomeComponent} from './central-superpao/home/home.component';
import {LojasComponent} from './central-superpao/lojas/lojas.component';
import {RadioComponent} from './central-superpao/radio/radio.component';
import {AniversarioComponent} from './central-superpao/aniversario/aniversario.component';
import {LojaDetailComponent} from './central-superpao/lojas/loja-detail/loja-detail.component';
import {ContatoComponent} from './central-superpao/contato/contato.component';
import {ProcedimentosComponent} from './central-superpao/procedimentos/procedimentos.component';
import {LojaService} from './central-superpao/lojas/loja.service';
import {RadioSerice} from './central-superpao/radio/radio.service';
import { LinksUteisComponent } from './central-superpao/links-uteis/links-uteis.component';
import {AniversarioService} from './central-superpao/aniversario/aniversario.service';
import { TreinamentosComponent } from './central-superpao/treinamentos/treinamentos.component';
import {TreinamentosService} from "./central-superpao/treinamentos/treinamentos.service";
import {HomeService} from "./central-superpao/home/home.service";
import {LinksUteisService} from "./central-superpao/links-uteis/links-uteis.service";


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LojasComponent,
        HomeComponent,
        RadioComponent,
        AniversarioComponent,
        LojaDetailComponent,
        ContatoComponent,
        ProcedimentosComponent,
        ProcedimentoDetailComponent,
        LinksUteisComponent,
        TreinamentosComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule,
        routing,
        Ng2FilterPipeModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAqfFvC0QgYS8iSe-xXY69Gg6nynelpxAU'
        })
    ],
    bootstrap: [AppComponent],
    providers: [
        RadioSerice,
        LojaService,
        AniversarioService,
        TreinamentosService,
        HomeService,
        LinksUteisService
    ],

})
export class AppModule {
}
