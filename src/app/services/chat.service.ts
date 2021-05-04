import { Injectable } from '@angular/core';
import { WebSocketService } from './web-socket.service';

@Injectable({
    providedIn: 'root'
})
export class ChatService {
    constructor( private webSocketService: WebSocketService) {

    }

    enviarMensaje(mensaje: string) {
        const payload = {
            de: 'Ricardo',
            cuerpo: mensaje
        }

        this.webSocketService.emitir('mensaje', payload);
    }

    obtenerMensajes() {
        return this.webSocketService.listen('mensaje-nuevo');
    }
}