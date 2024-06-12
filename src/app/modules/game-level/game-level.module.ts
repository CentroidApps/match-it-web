import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { AddGameLevelComponent } from './add-game-level/add-game-level.component';
import { GameLevelListComponent } from './game-level-list/game-level-list.component';

const routes: Routes = [{ path: '', component: GameLevelListComponent }]

@NgModule({
    declarations: [
        GameLevelListComponent,
        AddGameLevelComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
    ]
})
export class GameLevelModule { }
