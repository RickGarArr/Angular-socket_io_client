import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { ChatService } from './services/chat.service';
import { WebSocketService } from './services/web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
