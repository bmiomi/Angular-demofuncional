import { Routes, RouterModule } from '@angular/router';
//Componentes
import { LogginComponent } from './Components/loggin/loggin.component';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { UsersComponent } from './Components/users/users.component';
import { UserComponent } from './Components/user/user.component';


 const APP_ROUTERS :Routes=[
   //{path:'login',component:LogginComponent},
   {path:'home',component:HomeComponent},
   {path:'Users',component:UsersComponent},
   {path:'User/:id',component:UserComponent},
   {path:'about',component:AboutComponent},
   {path:'**',pathMatch:'full',redirectTo:'home'}
 ];
 export const APP_ROUTING=RouterModule.forRoot(APP_ROUTERS)