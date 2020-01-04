import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginAdminPageRoutingModule } from './login-admin-routing.module';

import { LoginAdminPage } from './login-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LoginAdminPageRoutingModule
  ],
  declarations: [LoginAdminPage]
})
export class LoginAdminPageModule {}
