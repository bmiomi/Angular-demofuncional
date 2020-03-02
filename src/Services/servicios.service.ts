export interface Usuarios {

    id:string;
    Nombre:string,
    Apellido:string,
    Funcion:string,
    Descripcion:string,
    img:string
}

import { Injectable } from '@angular/core';

@Injectable()
export class ServiciosService {

    private ListServicios:Usuarios[]=[
        {id:'1',Nombre:'Carlos',Apellido:'Jaramillo',Funcion:'Tecnico',Descripcion:' Habil Con el desarollo de Consulta sql,  actualmente se encuentra terminando su carrera amante al futbol al igual que a actividades extracurriculares,ademas le gusta dormir demasido y tiene escusa para cual quier suceso que se le presente',img:''},
        {id:'2',Nombre:'Bryan',Apellido:'Moreno',Funcion:'Tecnico',Descripcion:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi provident omnis voluptate excepturi neque consequatur doloribus? Est voluptatum voluptatibus, accusantium corrupti reprehenderit illum? Laborum sapiente corrupti tempora, architecto ipsum temporibus.',img:''},
        {id:'3',Nombre:'Andres',Apellido:'Dias',Funcion:'Tecnico',Descripcion:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi provident omnis voluptate excepturi neque consequatur doloribus? Est voluptatum voluptatibus, accusantium corrupti reprehenderit illum? Laborum sapiente corrupti tempora, architecto ipsum temporibus.',img:''},
        {id:'4',Nombre:'Victor',Apellido:'Mendoza',Funcion:'Tecnico',Descripcion:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi provident omnis voluptate excepturi neque consequatur doloribus? Est voluptatum voluptatibus, accusantium corrupti reprehenderit illum? Laborum sapiente corrupti tempora, architecto ipsum temporibus.',img:''},
        {id:'5',Nombre:'Jairo',Apellido:'Cumbal',Funcion:'Tecnico',Descripcion:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi provident omnis voluptate excepturi neque consequatur doloribus? Est voluptatum voluptatibus, accusantium corrupti reprehenderit illum? Laborum sapiente corrupti tempora, architecto ipsum temporibus.',img:''},
        {id:'6',Nombre:'Charly',Apellido:'Paguay',Funcion:'Tecnico',Descripcion:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi provident omnis voluptate excepturi neque consequatur doloribus? Est voluptatum voluptatibus, accusantium corrupti reprehenderit illum? Laborum sapiente corrupti tempora, architecto ipsum temporibus.',img:''},
        {id:'7',Nombre:'Franscico',Apellido:'Masillas',Funcion:'Tecnico',Descripcion:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi provident omnis voluptate excepturi neque consequatur doloribus? Est voluptatum voluptatibus, accusantium corrupti reprehenderit illum? Laborum sapiente corrupti tempora, architecto ipsum temporibus.',img:''},
        {id:'8',Nombre:'Ana',Apellido:'Marquez',Funcion:'Tecnico',Descripcion:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi provident omnis voluptate excepturi neque consequatur doloribus? Est voluptatum voluptatibus, accusantium corrupti reprehenderit illum? Laborum sapiente corrupti tempora, architecto ipsum temporibus.',img:''},
        {id:'9',Nombre:'Bryan',Apellido:'Minio',Funcion:'Tecnico',Descripcion:' Apacionado con la Tecnologia,el desearrollo de nuevas herramientas metodos algoritmos que lleven a la resolucion de un problema de una manera mucho mas efeciente asi como como curioso por el mundo de sa CyberSeguridad y todas las funcionaledes que esta pueda brindar,amante a ser querido por feminas.,',img:'./assets/img/2019-12-08 08.52.05.jpg'}
        ] 
     
    constructor(){

    }

    getUsers():Usuarios[]{
        return this.ListServicios
      }
      
      getUser(index:string){
        return this.ListServicios[index]
      }


}