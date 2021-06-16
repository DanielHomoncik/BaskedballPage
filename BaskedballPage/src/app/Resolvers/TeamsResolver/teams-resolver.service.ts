import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TeamsServicesService } from 'src/app/Services/TeamsServices/teams-services.service';
import { Team } from 'src/app/Template/team';

@Injectable({
  providedIn: 'root'
})
export class TeamsResolverService implements Resolve<Team[]>{

  constructor(private readonly TeamService: TeamsServicesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Team[]> {
    return this.TeamService.getTeam()
  }
}
