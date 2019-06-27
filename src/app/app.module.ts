import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomPasswordInputComponent } from './custom-password-input/custom-password-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomPasswordInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
