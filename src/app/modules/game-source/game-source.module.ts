import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { SecurePipe } from 'src/app/pipes/secure.pipe';
import { GameSourceDetailsComponent } from './game-source-details/game-source-details.component';
import { GameSourceListComponent } from './game-source-list/game-source-list.component';
import { ShowImageDialogComponent } from './show-image-dialog/show-image-dialog.component';


const routes: Routes = [
    { path: '', component: GameSourceListComponent },
    { path: 'source-form/:id', component: GameSourceDetailsComponent },
    { path: 'add-source-form', component: GameSourceDetailsComponent }
];

@NgModule({
    declarations: [
        GameSourceListComponent,
        GameSourceDetailsComponent,
        ShowImageDialogComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        SecurePipe,
        RouterModule.forChild(routes),
    ],
})
export class GameSourceModule { }
