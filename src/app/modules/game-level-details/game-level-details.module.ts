import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { LevelDetailsTableComponent } from './level-details-table/level-details-table.component';

const routes: Routes = [{ path: '', component: LevelDetailsTableComponent }]

@NgModule({
    declarations: [
        LevelDetailsTableComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
    ]
})
export class GameLevelDetailsModule { }
