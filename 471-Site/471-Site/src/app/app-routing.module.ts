import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAthleticParkComponent } from './AddPages/add-athletic-park/add-athletic-park.component';
import { AddCoachComponent } from './AddPages/add-coach/add-coach.component';
import { AddEquipmentComponent } from './AddPages/add-equipment/add-equipment.component';
import { AddFieldComponent } from './AddPages/add-field/add-field.component';
import { AddGameSummaryComponent } from './AddPages/add-game-summary/add-game-summary.component';
import { AddGameComponent } from './AddPages/add-game/add-game.component';
import { AddParticipateComponent } from './AddPages/add-participate/add-participate.component';
import { AddPlayerComponent } from './AddPages/add-player/add-player.component';
import { AddRefereeComponent } from './AddPages/add-referee/add-referee.component';
import { AddTeamComponent } from './AddPages/add-team/add-team.component';
import { AddTournamentComponent } from './AddPages/add-tournament/add-tournament.component';
import { AthleticParkPageComponent } from './athletic-park-page/athletic-park-page.component';
import { CoachPageComponent } from './coach-page/coach-page.component';
import { DeleteAthleticParkComponent } from './DeletePages/delete-athletic-park/delete-athletic-park.component';
import { DeleteCoachComponent } from './DeletePages/delete-coach/delete-coach.component';
import { DeleteEquipmentComponent } from './DeletePages/delete-equipment/delete-equipment.component';
import { DeleteFieldComponent } from './DeletePages/delete-field/delete-field.component';
import { DeleteGameSummaryComponent } from './DeletePages/delete-game-summary/delete-game-summary.component';
import { DeleteGameComponent } from './DeletePages/delete-game/delete-game.component';
import { DeleteParticipateComponent } from './DeletePages/delete-participate/delete-participate.component';
import { DeletePlayerComponent } from './DeletePages/delete-player/delete-player.component';
import { DeleteRefereeComponent } from './DeletePages/delete-referee/delete-referee.component';
import { DeleteTeamComponent } from './DeletePages/delete-team/delete-team.component';
import { DeleteTournamentComponent } from './DeletePages/delete-tournament/delete-tournament.component';
import { EquipmentPageComponent } from './equipment-page/equipment-page.component';
import { FieldPageComponent } from './field-page/field-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { GameSumPageComponent } from './game-sum-page/game-sum-page.component';
import { LoggedOrganizerComponent } from './logged-organizer/logged-organizer.component';
import { LoggedPlayerComponent } from './logged-player/logged-player.component';
import { LoginComponent } from './login/login.component';
import { ParticipatePageComponent } from './participate-page/participate-page.component';
import { PlayerLoginComponent } from './player-login/player-login.component';
import { PlayerPageComponent } from './player-page/player-page.component';
import { RefereeComponent } from './referee/referee.component';
import { RegistrationTOComponent } from './registration-to/registration-to.component';
import { RegistrationComponent } from './registration/registration.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { TournamentOrganizerLoginComponent } from './tournament-organizer-login/tournament-organizer-login.component';
import { TournamentpageComponent } from './tournamentpage/tournamentpage.component';
import { UpdateAthleticParkComponent } from './UpdatePages/update-athletic-park/update-athletic-park.component';
import { UpdateCoachComponent } from './UpdatePages/update-coach/update-coach.component';
import { UpdateEquipmentComponent } from './UpdatePages/update-equipment/update-equipment.component';
import { UpdateFieldComponent } from './UpdatePages/update-field/update-field.component';
import { UpdateGameSummaryComponent } from './UpdatePages/update-game-summary/update-game-summary.component';
import { UpdateGameComponent } from './UpdatePages/update-game/update-game.component';
import { UpdatePlayerComponent } from './UpdatePages/update-player/update-player.component';
import { UpdateRefereeComponent } from './UpdatePages/update-referee/update-referee.component';
import { UpdateTeamComponent } from './UpdatePages/update-team/update-team.component';
import { UpdateTournamentComponent } from './UpdatePages/update-tournament/update-tournament.component';
import { ViewAthleticParkComponent } from './ViewPages/view-athletic-park/view-athletic-park.component';
import { ViewCoachComponent } from './ViewPages/view-coach/view-coach.component';
import { ViewEquipmentComponent } from './ViewPages/view-equipment/view-equipment.component';
import { ViewField1PlayerComponent } from './ViewPages/view-field1-player/view-field1-player.component';
import { ViewField1Component } from './ViewPages/view-field1/view-field1.component';
import { ViewField2PlayerComponent } from './ViewPages/view-field2-player/view-field2-player.component';
import { ViewField2Component } from './ViewPages/view-field2/view-field2.component';
import { ViewGame1PlayerComponent } from './ViewPages/view-game1-player/view-game1-player.component';
import { ViewGame1Component } from './ViewPages/view-game1/view-game1.component';
import { ViewGame2PlayerComponent } from './ViewPages/view-game2-player/view-game2-player.component';
import { ViewGame2Component } from './ViewPages/view-game2/view-game2.component';
import { ViewGamesum1PlayerComponent } from './ViewPages/view-gamesum1-player/view-gamesum1-player.component';
import { ViewGamesum1Component } from './ViewPages/view-gamesum1/view-gamesum1.component';
import { ViewGamesum2PlayerComponent } from './ViewPages/view-gamesum2-player/view-gamesum2-player.component';
import { ViewGamesum2Component } from './ViewPages/view-gamesum2/view-gamesum2.component';
import { ViewParticipationComponent } from './ViewPages/view-participation/view-participation.component';
import { ViewPlayerPlayerComponent } from './ViewPages/view-player-player/view-player-player.component';
import { ViewPlayerComponent } from './ViewPages/view-player/view-player.component';
import { ViewPlayer2PlayerComponent } from './ViewPages/view-player2-player/view-player2-player.component';
import { ViewPlayer2Component } from './ViewPages/view-player2/view-player2.component';
import { ViewRefereeComponent } from './ViewPages/view-referee/view-referee.component';
import { ViewTeam1PlayerComponent } from './ViewPages/view-team1-player/view-team1-player.component';
import { ViewTeam1Component } from './ViewPages/view-team1/view-team1.component';
import { ViewTeam2PlayerComponent } from './ViewPages/view-team2-player/view-team2-player.component';
import { ViewTeam2Component } from './ViewPages/view-team2/view-team2.component';
import { ViewTournamentPlayerComponent } from './ViewPages/view-tournament-player/view-tournament-player.component';
import { ViewTournamentComponent } from './ViewPages/view-tournament/view-tournament.component';

const routes: Routes = [ 
  {
  path: '',
  component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'loggedplayer',
    component: LoggedPlayerComponent
  },
  {
    path: 'loggedTO',
    component: LoggedOrganizerComponent
  },
  {
    path: 'registrationTO',
    component: RegistrationTOComponent
  },
  {
    path: 'TournamentPage',
    component: TournamentpageComponent
  },
  {
    path: 'Aparkpage',
    component: AthleticParkPageComponent
  },
  {
    path: 'equipPage',
    component: EquipmentPageComponent
  },
  {
    path: 'fieldPage',
    component: FieldPageComponent
  },
  {
    path: 'gamePage',
    component: GamePageComponent
  },
  {
    path: 'gameSumPage',
    component: GameSumPageComponent
  },
  {
    path: 'refereePage',
    component: RefereeComponent
  },
  {
    path: 'coachPage',
    component: CoachPageComponent
  },
  {
    path: 'teamPage',
    component: TeamPageComponent
  },
  {
    path: 'playerPage',
    component: PlayerPageComponent
  },
  {
    path: 'participatePage',
    component: ParticipatePageComponent
  },
  {
    path: 'tournamentLogin',
    component: TournamentOrganizerLoginComponent
  },
  {
    path: 'playerLogin',
    component: PlayerLoginComponent
  },
  {
    path: 'tournamentDelete',
    component: DeleteTournamentComponent
  },
  {
    path: 'aparkDelete',
    component: DeleteAthleticParkComponent
  },
  {
    path: 'equipmentDelete',
    component: DeleteEquipmentComponent
  },
  {
    path: 'fieldDelete',
    component: DeleteFieldComponent
  },
  {
    path: 'gameDelete',
    component: DeleteGameComponent
  },
  {
    path: 'gameSumDelete',
    component: DeleteGameSummaryComponent
  },
  {
    path: 'refereeDelete',
    component: DeleteRefereeComponent
  },
  {
    path: 'playerDelete',
    component: DeletePlayerComponent
  },
  {
    path: 'coachDelete',
    component: DeleteCoachComponent
  },
  {
    path: 'teamDelete',
    component: DeleteTeamComponent
  },
  {
    path: 'participateDelete',
    component: DeleteParticipateComponent
  },
  {
    path: 'aparkUpdate',
    component: UpdateAthleticParkComponent
  },
  {
    path: 'tournamentUpdate',
    component: UpdateTournamentComponent
  },
  {
    path: 'playerUpdate',
    component: UpdatePlayerComponent
  },
  {
    path: 'gameUpdate',
    component: UpdateGameComponent
  },
  {
    path: 'equipmentUpdate',
    component: UpdateEquipmentComponent
  },
  {
    path: 'fieldUpdate',
    component: UpdateFieldComponent
  },
  {
    path: 'coachUpdate',
    component: UpdateCoachComponent
  },
  {
    path: 'refereeUpdate',
    component:UpdateRefereeComponent
  },
  {
    path: 'gameSumUpdate',
    component: UpdateGameSummaryComponent
  },
  {
    path: 'teamUpdate',
    component: UpdateTeamComponent
  },
  {
    path: 'aparkAdd',
    component: AddAthleticParkComponent
  },
  {
    path: 'coachAdd',
    component: AddCoachComponent
  },
  {
    path: 'equipmentAdd',
    component: AddEquipmentComponent
  },
  {
    path: 'tournamentAdd',
    component: AddTournamentComponent
  },
  {
    path: 'fieldAdd',
    component: AddFieldComponent
  },
  {
    path: 'gameAdd',
    component: AddGameComponent
  },
  {
    path: 'playerAdd',
    component: AddPlayerComponent
  },
  {
    path: 'refereeAdd',
    component: AddRefereeComponent
  },
  {
    path: 'teamAdd',
    component: AddTeamComponent
  },
  {
    path: 'participateAdd',
    component: AddParticipateComponent
  },
  {
    path: 'gameSumAdd',
    component: AddGameSummaryComponent
  },
  {
    path: 'tournamentView',
    component: ViewTournamentComponent
  },
  {
    path: 'aparkView',
    component: ViewAthleticParkComponent
  },
  {
    path: 'coachView',
    component: ViewCoachComponent
  },
  {
    path: 'refereeView',
    component: ViewRefereeComponent
  },
  {
    path: 'equipmentView',
    component: ViewEquipmentComponent
  },
  {
    path: 'participateView',
    component: ViewParticipationComponent
  },
  {
    path: 'tournamentPlayerView',
    component: ViewTournamentPlayerComponent
  },
  {
    path: 'fieldViewLanding',
    component: ViewField1Component
  },
  {
    path: 'fieldView',
    component: ViewField2Component
  },
  {
    path: 'playerFieldLanding',
    component: ViewField1PlayerComponent
  },
  {
    path: 'playerFieldView',
    component: ViewField2PlayerComponent
  },
  {
    path: 'gameLanding',
    component: ViewGame1Component
  },
  {
    path: 'gameView',
    component: ViewGame2Component
  },
  {
    path: 'gamePlayerLanding',
    component: ViewGame1PlayerComponent
  },
  {
    path: 'gamePlayerView',
    component: ViewGame2PlayerComponent
  },
  {
    path: 'gameSumLanding',
    component: ViewGamesum1Component
  },
  {
    path: 'gameSumView',
    component: ViewGamesum2Component
  },
  {
    path: 'playerSumLanding',
    component: ViewGamesum1PlayerComponent
  },
  {
    path: 'playerSumView',
    component: ViewGamesum2PlayerComponent
  },
  {
    path: 'teamLanding',
    component: ViewTeam1Component
  },
  {
    path: 'teamView',
    component: ViewTeam2Component
  },
  {
    path: 'playerTeamLanding',
    component: ViewTeam1PlayerComponent
  },
  {
    path: 'playerTeamView',
    component: ViewTeam2PlayerComponent
  },
  {
    path: 'playerLanding',
    component: ViewPlayerComponent
  },
  {
    path: 'playerView',
    component: ViewPlayer2Component
  },
  {
    path: 'pPlayer',
    component: ViewPlayerPlayerComponent
  },
  {
    path: 'pPlayerView',
    component: ViewPlayer2PlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
