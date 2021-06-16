import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsServicesService } from '../Services/TeamsServices/teams-services.service';
import { Team } from '../Template/team';

@Component({
  selector: 'app-all-teams',
  templateUrl: './all-teams.component.html',
  styleUrls: ['./all-teams.component.sass']
})
export class AllTeamsComponent implements OnInit {
  Teams: Team[];
  constructor(private readonly teamService: TeamsServicesService,
    public readonly route: ActivatedRoute) { }


  ngOnInit(): void {
    this.Teams = this.route.snapshot.data.Team.data

  }

}
