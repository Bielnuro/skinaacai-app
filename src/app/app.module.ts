import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PedidoConcluidoPage } from '../pages/pedido-concluido/pedido-concluido';
import { InstrucoesEnviadasPage } from '../pages/instrucoes-enviadas/instrucoes-enviadas';
import {SucessoSenhaPage } from '../pages/sucesso-senha/sucesso-senha';
import {MeusDadosPage } from '../pages/meus-dados/meus-dados';
import { OutroEnderecoPage } from '../pages/outro-endereco/outro-endereco';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PedidoConcluidoPage,
    InstrucoesEnviadasPage,
    SucessoSenhaPage,
    MeusDadosPage,
    OutroEnderecoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PedidoConcluidoPage,
    InstrucoesEnviadasPage,
    SucessoSenhaPage,
    MeusDadosPage,
    OutroEnderecoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
