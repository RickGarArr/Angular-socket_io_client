import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MensajesComponent } from '././pages/mensajes/mensajes.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'mensajes', component: MensajesComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'mensajes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
