import { Component, Input, OnInit } from '@angular/core';
import { item } from '../../models/Item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  data:item;

  constructor() {
    this.data = {
      name : "",
      description : "",
      unit : "",
      unit_price : 0
    }
  }

  ngOnInit(): void {

  }

}
