import { Injectable } from '@angular/core';
import Usuario from '../clases/Usuario';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    
    saveUser(usuario: Usuario) {
        localStorage.setItem('user', JSON.stringify(usuario));
    }

    getUser(): Usuario {
        let usuario: Usuario = null;
        if(localStorage.getItem('user')) {
            usuario = JSON.parse(localStorage.getItem('user'));
        }
        return usuario;
    }
}