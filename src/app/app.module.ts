import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//Servicios
import {ServiciosService} from '../Services/servicios.service';


  // RUTAS
import {APP_ROUTING} from './app.routes';

// Componentes
import { LogginComponent } from './Components/loggin/loggin.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { UsersComponent } from './Components/users/users.component';
import { UserComponent } from './Components/user/user.component';
import { UserTarjetacomponetComponent } from './Components/user-tarjetacomponet/user-tarjetacomponet.component';
import { NavbarComponent } from './Components/shared/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LogginComponent,
    AboutComponent,
    HomeComponent,
    UserComponent,
    UserTarjetacomponetComponent,
    NavbarComponent,
    ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    APP_ROUTING    
  ],
   providers:[
     ServiciosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
