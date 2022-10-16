import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
 
import { ServComponent } from './serv/serv.component';
import { FooterComponent } from './footer/footer.component';
 
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { CertComponent } from './cert/cert.component';
import { AboutComponent } from './about/about.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';import {MatFormFieldModule} from '@angular/material/form-field';import {MatInputModule} from '@angular/material/input';import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import 'animate.css';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
 
    ServComponent,
    FooterComponent,
 
    ExperienceComponent,
    ContactComponent,
    CertComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatGridListModule,MatFormFieldModule,MatInputModule,MatIconModule,FormsModule, ReactiveFormsModule,MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
