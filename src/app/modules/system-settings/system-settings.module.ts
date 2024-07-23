import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { SystemSettingsComponent } from './system-settings.component';

const routes: Routes = [{ path: '', component: SystemSettingsComponent }]

@NgModule({
  declarations: [
    SystemSettingsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class SystemSettingsModule { }
