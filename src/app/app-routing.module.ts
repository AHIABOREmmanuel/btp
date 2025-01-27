import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';
import { SliderComponent } from './slider/slider.component';
import { ProjetComponent } from './projet/projet.component';

const routes: Routes = [
  {path:'Accueil', component:SliderComponent},
  {path:'A propos', component:AproposComponent},
  {path:'services', component:ProjetComponent},
  {path:'contacts', component:AproposComponent},
  {path:'', component:AproposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
