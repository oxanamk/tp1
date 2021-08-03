import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { URL } from 'url';
import { Outils } from '../models/outils';

@Component({
  selector: 'app-outils',
  templateUrl: './outils.component.html',
  styleUrls: ['./outils.component.scss']
})
export class OutilsComponent implements OnInit {

toolChoice:boolean=false;
tools: Outils = new Outils('','','','');
toolsList: Outils[] = [
  {
    title: 'Connaissance',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu urna nec elit consequat tristique interdum ac risus. Cras fermentum faucibus leo nec vestibulum. Donec ullamcorper at risus condimentum egestas. Vestibulum velit enim, fermentum sit amet consequat vitae, vulputate id velit. Quisque ultricies nibh sit amet augue dictum dictum. Phasellus vel malesuada lorem, at rhoncus tortor. Integer hendrerit nunc neque, at vestibulum lectus tincidunt eget.',
    resume:'Lorem Ipsum',
    logo: "../assets/logo1.png" ,
  },
  {
    title: 'IAV',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu urna nec elit consequat tristique interdum ac risus. Cras fermentum faucibus leo nec vestibulum. Donec ullamcorper at risus condimentum egestas. Vestibulum velit enim, fermentum sit amet consequat vitae, vulputate id velit. Quisque ultricies nibh sit amet augue dictum dictum. Phasellus vel malesuada lorem, at rhoncus tortor. Integer hendrerit nunc neque, at vestibulum lectus tincidunt eget.',
    resume:'Lorem Ipsum',
    logo: '../assets/logo1.png'
  },
  {
    title: 'MyLeads',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu urna nec elit consequat tristique interdum ac risus. Cras fermentum faucibus leo nec vestibulum. Donec ullamcorper at risus condimentum egestas. Vestibulum velit enim, fermentum sit amet consequat vitae, vulputate id velit. Quisque ultricies nibh sit amet augue dictum dictum. Phasellus vel malesuada lorem, at rhoncus tortor. Integer hendrerit nunc neque, at vestibulum lectus tincidunt eget.',
    resume:'Lorem Ipsum',
    logo : '../assets/logo1.png'
  }
];
descList : Outils[];
  @Output() toolsInfo: EventEmitter<any>= new EventEmitter<any>();
 

  constructor() {}

  ngOnInit(): void {
  }

  openDescription(tool:Outils) 
  {    
    this.toolsInfo.emit([
      this.descList = [],
      this.descList.push(tool),
      ]);
    }
    

  

  itColor:boolean = true ;
    // sendToolstoHome():void{
    //   this.tools.emit()
    // }
}
