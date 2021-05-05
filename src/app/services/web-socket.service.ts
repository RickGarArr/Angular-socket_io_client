import { Injectable } from '@angular/core';
import { Socket, io } from 'socket.io-client';
import { Observable } from 'rxjs';
import Usuario from '../clases/Usuario';
import { StorageService } from './storage.service';
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  
  private socket: Socket;
  public socketStatus: boolean = false;
  public usuario: Usuario = null;

  constructor(private storageService: StorageService) {
    this.socket = io('http://localhost:5000');
    this.checkStatus();
    this.usuario = this.storageService.getUser();
  }
  
  public getUser(): Usuario{
    if(this.usuario) this.login(this.usuario);
    return this.usuario;
  }

  public checkStatus() {
    this.socket.on('connect', () => {
      console.log('conectado al servidor');
      console.log(this.socket.id);
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor');
      this.socketStatus = false;
    });
  }


  emitir(evento: string, payload?: any, callback?: Function) {
    this.socket.emit(evento, payload, callback);
  }

  listen( evento: string) {
    return new Observable(subs => {
      this.socket.on(evento, (data) => {
        subs.next(data);
      });
    });
  }

  login(usuario: Usuario): Promise<any> {
    return new Promise((resolve, reject) => {
      this.emitir('login', usuario, (err, usuario: Usuario) => {
        if(err) reject(err);
        this.storageService.saveUser(usuario);
        resolve(usuario);
      });
    });
  }

}
