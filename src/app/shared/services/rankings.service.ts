import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import testRankings from 'src/app/shared/mockData/testRankings.json';
import odirankings from 'src/app/shared/mockData/odiRankings.json';
import t20rankings from 'src/app/shared/mockData/t20Rankings.json';

@Injectable({
  providedIn: 'root'
})
export class RankingsService {
testMatchRankings: Array<any> = testRankings;
odiMatchRankings: Array<any> = odirankings;
t20MatchRankings: Array<any> = t20rankings;

  constructor() { }

  getTestRankings(){
    return of(this.testMatchRankings);
  }

  getOdiRankings(){
    return of(this.odiMatchRankings);
  }

  getT20Rankings(){
    return of(this.t20MatchRankings);
  }
}
