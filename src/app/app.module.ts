import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InscriptionPage } from '../pages/inscription/inscription';
import { InformationPage } from '../pages/information/information';
import { RdvPage } from '../pages/rdv/rdv';
import { HistoriquePage } from '../pages/historique/historique';
import { MaplieuPage } from '../pages/maplieu/maplieu';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    InscriptionPage,
    InformationPage,
    HistoriquePage,
    RdvPage,
    MaplieuPage
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
    InscriptionPage,
    InformationPage,
    HistoriquePage,
    RdvPage,
    MaplieuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
        NativeStorage
  ]
})
export class AppModule {}
