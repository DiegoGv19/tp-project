import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Pages/admin/admin.component';
import { LoginComponent } from './Pages/login/login.component';
import { MainComponent } from './Pages/main/main.component';
import { RecoverPasswordComponent } from './Pages/recover-password/recover-password.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'recover-password',
    component: RecoverPasswordComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'main',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
