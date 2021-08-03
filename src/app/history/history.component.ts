import { Component, OnInit } from '@angular/core';
import { About } from '../models/about';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  para:About= new About('','');
  paraList:About[] = [
    {
      title: 'Notre équipe',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Notre but',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
