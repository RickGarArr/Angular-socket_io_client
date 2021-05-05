import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { WebSocketService } from '../services/web-socket.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private wsService: WebSocketService, private router: Router) {

  }

  canActivate(){
    const estado = this.wsService.getUser() !== null ? true : false;
    if (!estado) this.router.navigate(['/']);
    return estado;
  }
  
}
