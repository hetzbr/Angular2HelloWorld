import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutUsComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HelloWorldComponent } from '../HelloWorld/hello.component';

export const MODULE_ROUTES: Route[] = [
  { path: '', pathMatch: 'full' , component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'hello', component: HelloWorldComponent }
]

export const MODULE_COMPONENTS = [
  HomeComponent,
  AboutUsComponent,
  ContactComponent
]
