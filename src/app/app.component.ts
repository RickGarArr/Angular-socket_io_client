import { AfterContentInit, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges, } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { ChatService } from './services/chat.service';
import { WebSocketService } from './services/web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  private mensajesSubs: Subscription;

  constructor(private wsService: WebSocketService, private chatService: ChatService) {
  }
  
  ngOnInit() {
    this.mensajesSubs = this.chatService.obtenerMensajesPrivados().subscribe( mensaje => {
      console.log(mensaje);
    });
  }
  
  ngOnDestroy(): void {
    this.mensajesSubs.unsubscribe();
  }
}
