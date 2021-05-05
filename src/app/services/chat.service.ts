import { Injectable } from '@angular/core';
import { WebSocketService } from './web-socket.service';

@Injectable({
    providedIn: 'root'
})
export class ChatService {
    constructor( private webSocketService: WebSocketService, private wsService: WebSocketService) {

    }

    enviarMensaje(mensaje: string) {
        const payload = {
            de: this.wsService.usuario.nombre,
            cuerpo: mensaje
        }
        this.webSocketService.emitir('mensaje', payload);
    }

    obtenerMensajes() {
        return this.webSocketService.listen('mensaje-nuevo');
    }

    obtenerMensajesPrivados() {
        return this.webSocketService.listen('mensaje-privado');
    }
}