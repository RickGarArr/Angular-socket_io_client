import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MensajesComponent } from '././pages/mensajes/mensajes.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'mensajes',
    component: MensajesComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
