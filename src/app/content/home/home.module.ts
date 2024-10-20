import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { Routes,RouterModule } from '@angular/router';
const routes:Routes=[{
  path:'',
  component:HomeComponent
}]

@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
