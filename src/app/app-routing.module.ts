import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Pages/admin/admin.component';
import { LoginComponent } from './Pages/login/login.component';
import { MainComponent } from './Pages/main/main.component';
import { EmailSentComponent } from './Pages/recover-password/email-sent/email-sent.component';
import { NewPasswordComponent } from './Pages/recover-password/new-password/new-password.component';
import { RecoverPasswordComponent } from './Pages/recover-password/recover-password.component';
import { RecoveredMessageComponent } from './Pages/recover-password/recovered-message/recovered-message.component';
import { DisplayFishFarmsComponent } from './Pages/display-fish-farms/display-fish-farms.component';
import { DoorSettingsComponent } from './Pages/door-settings/door-settings.component';
import { CompanySettingsComponent } from './Pages/company-settings/company-settings.component';
import { MainRecoverPasswordComponent } from './Pages/main-recover-password/main-recover-password.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  /*Iglesia y Moleche: En mi local no se refleja el responsive de ninguna de las vistas*/
  {
    path: 'recover-password',
    component: MainRecoverPasswordComponent,
    children: [
      {
        path: '',
        component: RecoverPasswordComponent,
      },
      {
        path: 'email-sent',
        component: EmailSentComponent,
      },
      {
        path: 'new-password',
        component: NewPasswordComponent,
      },
      {
        path: 'recovered',
        component: RecoveredMessageComponent,
      },
    ]
  },

  /*Iglesia: A que se debe este path
    Falta el vista "Configuración de puertas automáticas - Mensaje de cambios guardados"
  */
  {
    path: 'main/display',
    component: DisplayFishFarmsComponent,
  },
  
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: MainComponent,
        children: [
          {
            path: '',
            component: DisplayFishFarmsComponent,
          },
          {
            path: 'settings',
            component: DoorSettingsComponent,
          },
          {
            path: 'company',
            component: CompanySettingsComponent,
          },
          {
            path: 'main',
            redirectTo: '',
          },
        ],
      },
      
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
