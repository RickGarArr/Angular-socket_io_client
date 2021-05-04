import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'chat-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit{

  @Input() mensajes: mensaje[] = [];
  constructor() { }

  ngOnInit(): void {
  }
}

interface mensaje {
  de: string;
  cuerpo: string;
}