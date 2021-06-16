import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllTeamsComponent } from './all-teams/all-teams.component';
import { MenuComponent } from './menu/menu.component';
import { TeamsResolverService } from './Resolvers/TeamsResolver/teams-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
  {
    path: 'teams',
    component: AllTeamsComponent,
    resolve: {
      Team: TeamsResolverService
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
