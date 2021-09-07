import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerStatsService } from 'src/app/shared/services/player-stats.service';

@Component({
  selector: 'app-batsman-details',
  templateUrl: './batsman-details.component.html',
  styleUrls: ['./batsman-details.component.css']
})
export class BatsmanDetailsComponent implements OnInit {
  batsmanDetails!: any[];
  batsmanId!: number;

  constructor(private _batsmanDetails: PlayerStatsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.batsmanId = id;
    this.getBatsmanDetails(id);
  }

  getBatsmanDetails(id: number){
    this._batsmanDetails.getBatsmanDetails()
     .subscribe(response => {
       this.batsmanDetails = response;
       console.log(this.batsmanDetails);
       for(let batsmanDetail of this.batsmanDetails){
         if(this.batsmanId === batsmanDetail.id){
           console.log(batsmanDetail);
         }
       }
     })
  }
}
