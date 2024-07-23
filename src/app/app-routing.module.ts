import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { SessionGuard } from './guards/session.guard';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'game-type',
    loadChildren: () =>
      import('./modules/game-type/game-type.module').then((m) => m.GameTypeModule),
    canActivate: [SessionGuard],
  },
  {
    path: 'game-level',
    loadChildren: () =>
      import('./modules/game-level/game-level.module').then((m) => m.GameLevelModule),
    canActivate: [SessionGuard],
  },
  {
    path: 'game-level-details',
    loadChildren: () =>
      import('./modules/game-level-details/game-level-details.module').then((m) => m.GameLevelDetailsModule),
    canActivate: [SessionGuard],
  },
  {
    path: 'game-source',
    loadChildren: () =>
      import('./modules/game-source/game-source.module').then((m) => m.GameSourceModule),
    canActivate: [SessionGuard],
  },
  {
    path: 'system-settings',
    loadChildren: () =>
      import('./modules/system-settings/system-settings.module').then((m) => m.SystemSettingsModule),
    canActivate: [SessionGuard],
  },

  { path: '404', component: PageNoFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
