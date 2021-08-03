import { EventEmitter, Output } from "@angular/core";

export class Outils {
    title:string;
    logo:string;
    resume:string;
    description:string;

    constructor(title: string, logo: string, resume:string, description: string){
        this.title = title; 
        this.logo = logo; 
        this.resume = resume;
        this.description = description;

    }
}
