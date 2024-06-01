import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { GameTypeListComponent } from './game-type-list/game-type-list.component';
import { AddGameTypeComponent } from './add-game-type/add-game-type.component';

const routes: Routes = [{ path: '', component: GameTypeListComponent }]

@NgModule({
    declarations: [
        GameTypeListComponent,
        AddGameTypeComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
    ]
})
export class GameTypeModule { }
