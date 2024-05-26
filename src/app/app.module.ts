import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Table, TableModule } from 'primeng/table'
import { ChartsComponent } from './components/charts/charts.component';
import { TableComponent } from './components/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'primeng/chart';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    TableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    ChartModule,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
