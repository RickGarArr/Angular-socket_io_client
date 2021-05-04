import { Injectable } from '@angular/core';
import { Socket, io } from 'socket.io-client';
import { Observable } from 'rxjs';
import Usuario from '../clases/Usuario';
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  
  private socket: Socket;
  public socketStatus: boolean = false;

  constructor() {
    console.log('llamando el contructor webSocketService');
    
    this.socket = io('http://localhost:5000');
    this.checkStatus();
  }

  public checkStatus() {
    this.socket.on('connect', () => {
      console.log('conectado al servidor');
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

  login(usuario: Usuario) {  
    this.emitir('login', usuario, (err, resp) => {
      if(err){
        console.log(err);
      }
    });
  }
}
