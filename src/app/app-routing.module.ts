import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { ServComponent } from './serv/serv.component';
 
import { ToolbarComponent } from './toolbar/toolbar.component';

const routes: Routes = [
    { path: '', component: ToolbarComponent,children: [
  { path: '', component: HomeComponent },


   { path: 'home', component:HomeComponent },

  { path: 'service', component:ServComponent },


  { path: 'experience', component:ExperienceComponent },




  ]},
  { path: 'about', component:AboutComponent },
  { path: 'contact', component:ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
