import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ClientComponent } from './client/client.component';
import { TemoignagesComponent } from './temoignages/temoignages.component';
import { EquipeComponent } from './equipe/equipe.component';
import { DetailsComponent } from './details/details.component';
import { ChoixComponent } from './choix/choix.component';
import { ProjetComponent } from './projet/projet.component';
import { AproposComponent } from './apropos/apropos.component';
import { SliderComponent } from './slider/slider.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ClientComponent,
    TemoignagesComponent,
    EquipeComponent,
    DetailsComponent,
    ChoixComponent,
    ProjetComponent,
    AproposComponent,
    SliderComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
