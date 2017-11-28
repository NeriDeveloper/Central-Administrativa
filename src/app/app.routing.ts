import {RouterModule, Routes} from '@angular/router';

import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './central-superpao/home/home.component';
import {LojasComponent} from './central-superpao/lojas/lojas.component';
import {RadioComponent} from './central-superpao/radio/radio.component';
import {AniversarioComponent} from './central-superpao/aniversario/aniversario.component';
import {LojaDetailComponent} from './central-superpao/lojas/loja-detail/loja-detail.component';
import {ContatoComponent} from './central-superpao/contato/contato.component';
import {ProcedimentosComponent} from './central-superpao/procedimentos/procedimentos.component';
import {ProcedimentoDetailComponent} from './central-superpao/procedimentos/procedimento-detail/procedimento-detail.component';
import {LinksUteisComponent} from "./central-superpao/links-uteis/links-uteis.component";
import {TreinamentosComponent} from "./central-superpao/treinamentos/treinamentos.component";


/**
 * Created by Juliano Sirtori on 24/04/2017.
 */
const APP_ROUTES: Routes = [
    {path: 'inicio', component: HomeComponent},
    {path: 'lojas', component: LojasComponent},
    {path: 'radio', component: RadioComponent},
    {path: 'aniversarios', component: AniversarioComponent},
    {path: 'detail/:id', component: LojaDetailComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'procedimentos', component: ProcedimentosComponent},
    {path: 'treinamentos', component: TreinamentosComponent},
    {path: 'procedimentos-detail/:id', component: ProcedimentoDetailComponent},
    {path: 'sitesuteis', component: LinksUteisComponent},
    {path: '**', redirectTo: 'inicio', pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);