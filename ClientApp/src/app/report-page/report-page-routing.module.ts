import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ReportPageComponent } from './report-page.component';

const routes: Routes = [
  { path: '', component: ReportPageComponent }  
];


@NgModule({
  declarations: [ReportPageComponent], 
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportPageRoutingModule { }
