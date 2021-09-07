import { Component, OnInit } from '@angular/core';
import { RankingsService } from 'src/app/shared/services/rankings.service';
import { RankingsComponent } from '../rankings.component';

@Component({
  selector: 'app-team-rankings',
  templateUrl: './team-rankings.component.html',
  styleUrls: ['./team-rankings.component.css']
})
export class TeamRankingsComponent implements OnInit {
  testRankings!: any[];
  odiRankings!: any[];
  t20Rankings!: any[];
 
  dataSource!: any[];
  displayedColumns: string[] = ['id', 'country', 'ratings', 'points'];

  testMatchRankings: boolean = false;
  odiMatchRankings: boolean = false;
  t20MatchRankings: boolean = false;

  constructor(private _teamRankings: RankingsService) { }

  ngOnInit(): void {
  }

  testMatch(){
    this._teamRankings.getTestRankings()
     .subscribe(response => {
       this.testRankings = response;
       this.dataSource = this.testRankings;
       console.log(this.testRankings);
       this.testMatchRankings = true;
       this.odiMatchRankings = false;
       this.t20MatchRankings = false;
     })
  }

  odiMatch(){
    this._teamRankings.getOdiRankings()
     .subscribe(response => {
       this.odiRankings = response;
       this.dataSource = this.odiRankings;
       console.log(this.odiRankings);
       this.odiMatchRankings = true;
       this.testMatchRankings = false;
       this.t20MatchRankings = false;
     })
  }

  t20Match(){
    this._teamRankings.getT20Rankings()
     .subscribe(response => {
       this.t20Rankings = response;
       this.dataSource = this.t20Rankings;
       console.log(this.t20Rankings);
       this.t20MatchRankings = true;
       this.testMatchRankings = false;
       this.odiMatchRankings = false;
     })
  }
}
