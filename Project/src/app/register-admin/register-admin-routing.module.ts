import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterAdminPage } from './register-admin.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterAdminPageRoutingModule {}
