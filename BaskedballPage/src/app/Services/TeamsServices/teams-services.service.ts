import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from 'src/app/Template/team';
@Injectable({
  providedIn: 'root'
})
export class TeamsServicesService {
  private readonly Url = 'https://www.balldontlie.io/api/v1/teams'

  constructor(private http: HttpClient) { }

  getTeam(): Observable<Team[]>{
    return this.http.get<Team[]>(`${this.Url}`)
  }
}
