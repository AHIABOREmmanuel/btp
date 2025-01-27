import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';
import { SliderComponent } from './slider/slider.component';
import { ProjetComponent } from './projet/projet.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {path:'', component:SliderComponent},
  {path:'apropos', component:AproposComponent},
  {path:'services', component:ProjetComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'', component:SliderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
