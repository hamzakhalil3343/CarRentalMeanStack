import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminpanelPage } from './adminpanel.page';

const routes: Routes = [
  {
    path: '',
    component: AdminpanelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminpanelPageRoutingModule {}
