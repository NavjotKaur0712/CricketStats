import { Component, OnInit, ViewChild } from '@angular/core';
import { RankingsService } from 'src/app/shared/services/rankings.service';
import { RankingsComponent } from '../rankings.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-team-rankings',
  templateUrl: './team-rankings.component.html',
  styleUrls: ['./team-rankings.component.css']
})
export class TeamRankingsComponent implements OnInit {
  testRankings!: any[];
  odiRankings!: any[];
  t20Rankings!: any[];

  dataSource!: any;
  displayedColumns: string[] = ['id', 'country', 'ratings', 'points'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  testMatchRankings: boolean = true;
  odiMatchRankings: boolean = false;
  t20MatchRankings: boolean = false;

  constructor(private _teamRankings: RankingsService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  ngOnInit(): void {
    this._teamRankings.getTestRankings()
      .subscribe(response => {
        this.testRankings = response;
        this.dataSource = this.testRankings;
        console.log(this.testRankings);
        this.dataSource = new MatTableDataSource(this.testRankings);
      })
      this._teamRankings.getOdiRankings()
      .subscribe(response => {
        this.odiRankings = response;
        this.dataSource = this.odiRankings;
        console.log(this.odiRankings);
        this.dataSource = new MatTableDataSource(this.odiRankings);  
      })
      this._teamRankings.getT20Rankings()
      .subscribe(response => {
        this.t20Rankings = response;
        this.dataSource = this.t20Rankings;
        console.log(this.t20Rankings);
        this.dataSource = new MatTableDataSource(this.t20Rankings);
      })
  }

  testMatch() {
    this._teamRankings.getTestRankings()
      .subscribe(response => {
        this.testRankings = response;
        this.dataSource = this.testRankings;
        console.log(this.testRankings);
        this.testMatchRankings = true;
        // this.dataSource = new MatTableDataSource(this.testRankings);
        this.odiMatchRankings = false;
        this.t20MatchRankings = false;
      })
  }

  odiMatch() {
    this._teamRankings.getOdiRankings()
      .subscribe(response => {
        this.odiRankings = response;
        this.dataSource = this.odiRankings;
        console.log(this.odiRankings);
        // this.dataSource = new MatTableDataSource(this.odiRankings);
        this.odiMatchRankings = true;
        this.testMatchRankings = false;
        this.t20MatchRankings = false;
      })
  }

  t20Match() {
    this._teamRankings.getT20Rankings()
      .subscribe(response => {
        this.t20Rankings = response;
        this.dataSource = this.t20Rankings;
        console.log(this.t20Rankings);
        // this.dataSource = new MatTableDataSource(this.t20Rankings);
        this.t20MatchRankings = true;
        this.testMatchRankings = false;
        this.odiMatchRankings = false;
      })
  }
}
