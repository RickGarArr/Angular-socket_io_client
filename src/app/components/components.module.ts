import { NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { MensajesComponent } from './mensajes/mensajes.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [FooterComponent, ChatComponent, MensajesComponent ],
    exports: [ FooterComponent, ChatComponent, MensajesComponent ]
}) export class ComponentsModule { }