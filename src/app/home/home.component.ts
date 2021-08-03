import { Component, OnInit } from '@angular/core';
import { Outils } from '../models/outils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  headImg: string ='/assets/commu.jpg';
  descFromOutil: any='';


  constructor() { }

  ngOnInit(): void {
  }
  showDesc(event:Outils):void{
    this.descFromOutil=event;
  }

}
