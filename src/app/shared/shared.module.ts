import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { LoadingViewComponent } from './loading-view/loading-view.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent,
    LoadingViewComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    OverlayModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    DatePipe
  ],
  exports: [
    SidebarComponent,
    LoadingViewComponent,
  ]
})
export class SharedModule { }
