import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableComponent } from './components/table/table.component';
import { ChartsComponent } from './components/charts/charts.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'chart', component: ChartsComponent },
  { path: 'table', component: TableComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
