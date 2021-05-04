import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy, AfterViewInit {

  public texto: string = '';
  private mensajesSubs: Subscription;
  public mensajes = [];
  private appMensajes: HTMLElement;

  constructor( private chatService: ChatService) { }

  ngOnInit(): void {
    this.mensajesSubs =  this.chatService.obtenerMensajes().subscribe( mensaje => {
      this.mensajes.push(mensaje);
      setTimeout(() => {
        this.appMensajes.scrollTop = this.appMensajes.scrollHeight;
      }, 50);
    });
  }

  ngAfterViewInit(){
    this.appMensajes = document.querySelector('#chat-mensajes');
  }

  enviar() {
    if (this.texto.trim() !== '') {
      this.chatService.enviarMensaje(this.texto.trim());
      this.texto = '';
    }
  }

  ngOnDestroy() {
    this.mensajesSubs.unsubscribe();     
  }
}
