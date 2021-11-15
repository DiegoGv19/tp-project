import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { MainComponent } from './Pages/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { RecoverPasswordComponent } from './Pages/recover-password/recover-password.component';
import { EmailSentComponent } from './Pages/recover-password/email-sent/email-sent.component';
import { NewPasswordComponent } from './Pages/recover-password/new-password/new-password.component';
import { RecoveredMessageComponent } from './Pages/recover-password/recovered-message/recovered-message.component';
import { DisplayFishFarmsComponent } from './Pages/display-fish-farms/display-fish-farms.component';
import { DoorSettingsComponent } from './Pages/door-settings/door-settings.component';
import { DialogSavedComponent } from './Pages/dialog-saved/dialog-saved.component';
import { DialogProfileComponent } from './Pages/dialog-profile/dialog-profile.component';
import { CompanySettingsComponent } from './Pages/company-settings/company-settings.component';
import { MainRecoverPasswordComponent } from './Pages/main-recover-password/main-recover-password.component';
import { FishFarmDetailsComponent } from './components/admin/fish-farm-details/fish-farm-details.component';
import { RemoveFishFarmComponent } from './components/admin/remove-fish-farm/remove-fish-farm.component';

export const AngularMaterialModules = {
  imports: [
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
    MatDialogModule,
    MatMenuModule,
  ],
  exports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatMenuModule],
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    MainComponent,
    RecoverPasswordComponent,
    EmailSentComponent,
    NewPasswordComponent,
    RecoveredMessageComponent,
    DisplayFishFarmsComponent,
    DoorSettingsComponent,
    DialogSavedComponent,
    DialogProfileComponent,
    CompanySettingsComponent,
    MainRecoverPasswordComponent,
    FishFarmDetailsComponent,
    RemoveFishFarmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...AngularMaterialModules.imports,
  ],
  exports: [...AngularMaterialModules.exports],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
