import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Http, HttpModule } from '@angular/http'

import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component'
import { InsertComponent} from './components/insert/insert.component'
import { DeleteComponent } from './components/delete/delete.component'

import { TraderService } from './services/trader.service';
import {RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'insert', component:InsertComponent},
  {path: 'delete', component:DeleteComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InsertComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TraderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
