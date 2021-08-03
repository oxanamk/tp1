import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { OutilsComponent } from './outils/outils.component';

const routes: Routes = [
  {path:'', component : HomeComponent},
  {path:'outil', component : OutilsComponent},
  {path:'about', component : AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
