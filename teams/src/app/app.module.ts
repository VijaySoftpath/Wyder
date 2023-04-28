import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WyderComponent } from './wyder/wyder.component';
import { OptevusComponent } from './optevus/optevus.component';

@NgModule({
  declarations: [
    AppComponent,
    WyderComponent,
    OptevusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
