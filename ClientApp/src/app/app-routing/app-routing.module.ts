import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

import { LayoutComponent } from '../layout/layout.component';
import { HomeComponent } from '../home/home.component';
import { CounterComponent } from '../counter/counter.component';
import { FetchDataComponent } from '../fetch-data/fetch-data.component';
import { Tutorial1Component } from '../tutorial1/tutorial1.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'tutorial1', component: Tutorial1Component },
  { path: 'reportpage', loadChildren: () => import('../report-page/report-page.module').then(m => m.ReportPageModule) }
];

@NgModule({
  declarations: [
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    LayoutComponent,
    Tutorial1Component    
  ],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
