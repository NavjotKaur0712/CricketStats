import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BatsmanDetailsComponent } from './player-stats/batsman-details/batsman-details.component';
import { BowlerDetailsComponent } from './player-stats/bowler-details/bowler-details.component';
import { PlayerStatsComponent } from './player-stats/player-stats.component';
import { RankingsComponent } from './rankings/rankings.component';
import { TeamRankingsComponent } from './rankings/team-rankings/team-rankings.component';

const routes: Routes = [
  { path: "rankings", component: RankingsComponent},
  { path: "teamRankings", component: TeamRankingsComponent},
  { path: "playerStats", component: PlayerStatsComponent},
  { path: "batsmanDetails", component: BatsmanDetailsComponent},
  { path: "batsmanDetails/:id", component: BatsmanDetailsComponent},
  { path: "bowlerDetails", component: BowlerDetailsComponent},
  { path: "bowlerDetails/:id", component: BowlerDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
