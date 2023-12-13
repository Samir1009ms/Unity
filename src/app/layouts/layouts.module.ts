import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layouts.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { IconsProviderModule } from '../icons-provider.module';


@NgModule({
  declarations: [
    LayoutsComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    IconsProviderModule
  ]
})
export class LayoutsModule { }
