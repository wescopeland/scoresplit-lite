import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

import { SharedModule } from '@shared/shared.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { DisplayModule } from './display/display.module';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    SharedModule,
    DisplayModule,
    SettingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
