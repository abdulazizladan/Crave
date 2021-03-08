import { Component, Input, OnInit } from '@angular/core';
import { item } from '../../models/Item.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  items : item[];

  constructor(){
    this.items = []
  }

  ngOnInit(): void {
  this.items = [
    {
      name : "Item 1",
      description : "description blah blah",
      unit : "Kg",
      unit_price : 0
    },
    {
      name : "Item 2",
      description : "description blah blah",
      unit : "Kg",
      unit_price : 0
    },
    {
      name : "Item 3",
      description : "description blah blah",
      unit : "cm",
      unit_price : 0
    },
    {
      name : "Item 3",
      description : "description blah blah",
      unit : "cm",
      unit_price : 0
    },
    {
      name : "Item 3",
      description : "description blah blah",
      unit : "cm",
      unit_price : 0
    },
    {
      name : "Item 3",
      description : "description blah blah",
      unit : "cm",
      unit_price : 0
    }
  ]
  }

}
