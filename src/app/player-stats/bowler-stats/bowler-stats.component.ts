import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerStatsService } from 'src/app/shared/services/player-stats.service';

@Component({
  selector: 'app-bowler-stats',
  templateUrl: './bowler-stats.component.html',
  styleUrls: ['./bowler-stats.component.css']
})
export class BowlerStatsComponent implements OnInit {
  bowlerStats!: any[];
  constructor(private _playesStats: PlayerStatsService, private router: Router) { }

  ngOnInit(): void {
    this.getBowlerStats();
  }

  getBowlerStats(){
    this._playesStats.getBowlerStats()
    .subscribe(response => {
      this.bowlerStats = response;
      console.log(this.bowlerStats)
    })
  }

  onBowlerStats(bowlerStat: any){
    this.router.navigate(['/bowlerDetails',bowlerStat.id])
  }
}
