import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TranslocoCoreModule } from './core/transloco/transloco.module';
import { AdminPageComponent } from './modules/admin-page/admin-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MockApiModule } from 'projects/mock-api/src/public-api';
import { mockApiServices } from 'projects/mock-api/src/lib/mock-api';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/admin-page/admin-page.module').then(( { AdminPageModule }) => AdminPageModule) }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MockApiModule.forRoot(mockApiServices),
    TranslocoCoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
