import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const CURRENT_ROUTES: Routes = [
  { path: 'h', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    RouterModule.forChild(CURRENT_ROUTES),
  ]
})
export class HomeModule { }
