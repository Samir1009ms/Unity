import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { IconsProviderModule } from '../icons-provider.module';


@NgModule({
  declarations: [
    SharedComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent,

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    IconsProviderModule
  ]
})
export class SharedModule { }
