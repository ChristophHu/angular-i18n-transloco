import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page.component';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';

const routes: Routes = [
  { path: '', component: AdminPageComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslocoModule
  ],
  providers: [
    { provide: TRANSLOCO_SCOPE, useValue: 'admin-page' }
  ]
})
export class AdminPageModule { }
