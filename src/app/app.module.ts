import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TranslocoCoreModule } from './transloco/transloco.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslocoCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
