import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginAdminPage } from './login-admin.page';

const routes: Routes = [
  {
    path: '',
    component: LoginAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginAdminPageRoutingModule {}
