import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminpanelPageRoutingModule } from './adminpanel-routing.module';

import { AdminpanelPage } from './adminpanel.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminpanelPageRoutingModule
  ],
  declarations: [AdminpanelPage]
})
export class AdminpanelPageModule {}
