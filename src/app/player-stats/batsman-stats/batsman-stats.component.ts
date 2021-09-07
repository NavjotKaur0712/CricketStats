import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerStatsService } from 'src/app/shared/services/player-stats.service';

@Component({
  selector: 'app-batsman-stats',
  templateUrl: './batsman-stats.component.html',
  styleUrls: ['./batsman-stats.component.css']
})
export class BatsmanStatsComponent implements OnInit {
  batsmanStats!: any[];
  constructor(private _playesStats: PlayerStatsService, private router: Router) { }

  ngOnInit(): void {
    this.getbatsmanStats();
  }

  getbatsmanStats(){
    this._playesStats.getBatsmanStats()
     .subscribe(response => {
       this.batsmanStats = response;
       console.log(this.batsmanStats);
     })
  }

  onBatsmanStats(batsmanStat: any){
    this.router.navigate(['/batsmanDetails',batsmanStat.id]);
  }
}
