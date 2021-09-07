import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerStatsService } from 'src/app/shared/services/player-stats.service';

@Component({
  selector: 'app-bowler-details',
  templateUrl: './bowler-details.component.html',
  styleUrls: ['./bowler-details.component.css']
})
export class BowlerDetailsComponent implements OnInit {
  bowlerDetails!: any[];

  constructor(private _bowlerDetails: PlayerStatsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  getBowlerDetails(){
    this._bowlerDetails.getBowlerDetails()
     .subscribe(response => {
       this.bowlerDetails = response;
       console.log(this.bowlerDetails);
     })
  }

}
