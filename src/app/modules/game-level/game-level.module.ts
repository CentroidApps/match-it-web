import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { GameLevelListComponent } from './game-level-list/game-level-list.component';
import { AddGameLevelComponent } from './add-game-level/add-game-level.component';
import { BulkInsertComponent } from './bulk-insert/bulk-insert.component';

const routes: Routes = [{ path: '', component: GameLevelListComponent }]

@NgModule({
    declarations: [
        GameLevelListComponent,
        AddGameLevelComponent,
        BulkInsertComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
    ]
})
export class GameLevelModule { }
