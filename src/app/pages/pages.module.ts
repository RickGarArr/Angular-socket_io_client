import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { LoginComponent } from './login/login.component';
import { MensajesComponent } from './mensajes/mensajes.component';

@NgModule({
    imports: [
        ComponentsModule,
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        LoginComponent,
        MensajesComponent
    ],
    declarations: [
        LoginComponent,
        MensajesComponent
    ]
})
export class PagesModule {}