import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ReportPageComponent } from './report-page.component';

//import { ReportPageRoutingModule } from './report-page-routing.module';

const routes: Routes = [
  { path: '', component: ReportPageComponent }
];

@NgModule({
  declarations: [ReportPageComponent], 
  imports: [
    CommonModule, MaterialModule, ReactiveFormsModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ReportPageModule { }
