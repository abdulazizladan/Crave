import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//FlexLayout
import { FlexLayoutModule } from '@angular/flex-layout';

//MaterialModule
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


import { ShoppingRoutingModule } from './shopping-routing.module';
import { ItemComponent } from './components/item/item.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { TrackingComponent } from './components/tracking/tracking.component';


@NgModule({
  declarations: [ItemComponent, ItemsListComponent, ShoppingCartComponent, TrackingComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
