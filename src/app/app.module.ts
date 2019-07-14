import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

import { DataService } from './data.service';
import { RouterModule, Routes } from '@angular/router';


import { APP_BASE_HREF } from '@angular/common';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'

  },

  {
    path: 'Home',
    component: HomeComponent
  },

  {
    path: 'Hello',
    component: HelloComponent
  },

  {
    path: 'Hello/:name',
    component: HelloComponent
  },

  { path: '**', component: PageNotFoundComponentComponent }];

@NgModule({
  imports: [BrowserModule, FormsModule , RouterModule.forRoot(
    appRoutes,   //   { enableTracing: true } // <-- debugging purposes only
  )],
  declarations: [AppComponent, HelloComponent, HomeComponent, PageNotFoundComponentComponent],
  providers: [DataService,{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
