export default class Usuario {
    private nombre: string;
    private _instance: Usuario;

    constructor( nombre) {
        this.nombre = nombre;
    }
}