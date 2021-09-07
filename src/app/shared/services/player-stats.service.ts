import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import batsmanStats from 'src/app/shared/mockData/batsmanStats.json';
import bowlerStats from 'src/app/shared/mockData/bowlerStats.json';
import batsmanDetails from 'src/app/shared/mockData/batsmanDetails.json';
import bowlerDetails from 'src/app/shared/mockData/bowlerDetails.json';

@Injectable({
  providedIn: 'root'
})
export class PlayerStatsService {
  batsmanStats: Array<any> = batsmanStats;
  bowlerStats: Array<any> = bowlerStats;
  batsmanDetails: Array<any> = batsmanDetails;
  bowlerDetails: Array<any> = bowlerDetails;
  constructor() { }

  getBatsmanStats(){
    return of(batsmanStats);
  }
  
  getBowlerStats(){
    return of(bowlerStats);
  }

  getBatsmanDetails(){
    return of(batsmanDetails);
  }

  getBowlerDetails(){
    return of(bowlerDetails);
  }
}
