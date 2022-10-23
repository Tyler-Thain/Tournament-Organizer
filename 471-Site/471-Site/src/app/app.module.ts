import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoggedPlayerComponent } from './logged-player/logged-player.component';
import { RegistrationTOComponent } from './registration-to/registration-to.component';
import { LoggedOrganizerComponent } from './logged-organizer/logged-organizer.component';
import { TournamentpageComponent } from './tournamentpage/tournamentpage.component';
import { AthleticParkPageComponent } from './athletic-park-page/athletic-park-page.component';
import { EquipmentPageComponent } from './equipment-page/equipment-page.component';
import { FieldPageComponent } from './field-page/field-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { GameSumPageComponent } from './game-sum-page/game-sum-page.component';
import { RefereeComponent } from './referee/referee.component';
import { CoachPageComponent } from './coach-page/coach-page.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { PlayerPageComponent } from './player-page/player-page.component';
import { ParticipatePageComponent } from './participate-page/participate-page.component';
import { TournamentOrganizerLoginComponent } from './tournament-organizer-login/tournament-organizer-login.component';
import { PlayerLoginComponent } from './player-login/player-login.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { playerServices } from './services/playerServices.service';
import { toServices } from './services/toServices.service';
import { DeleteTournamentComponent } from './DeletePages/delete-tournament/delete-tournament.component';
import { DeleteAthleticParkComponent } from './DeletePages/delete-athletic-park/delete-athletic-park.component';
import { DeleteEquipmentComponent } from './DeletePages/delete-equipment/delete-equipment.component';
import { DeleteFieldComponent } from './DeletePages/delete-field/delete-field.component';
import { DeleteGameComponent } from './DeletePages/delete-game/delete-game.component';
import { DeleteGameSummaryComponent } from './DeletePages/delete-game-summary/delete-game-summary.component';
import { DeleteRefereeComponent } from './DeletePages/delete-referee/delete-referee.component';
import { DeleteCoachComponent } from './DeletePages/delete-coach/delete-coach.component';
import { DeleteTeamComponent } from './DeletePages/delete-team/delete-team.component';
import { DeletePlayerComponent } from './DeletePages/delete-player/delete-player.component';
import { DeleteParticipateComponent } from './DeletePages/delete-participate/delete-participate.component';
import { UpdateTournamentComponent } from './UpdatePages/update-tournament/update-tournament.component';
import { UpdateAthleticParkComponent } from './UpdatePages/update-athletic-park/update-athletic-park.component';
import { UpdatePlayerComponent } from './UpdatePages/update-player/update-player.component';
import { UpdateGameComponent } from './UpdatePages/update-game/update-game.component';
import { tournamentServices } from './services/tournamentServices.service';
import { athleticParkServices } from './services/athleticParkServices.service';
import { coachServices } from './services/coachServices.service';
import { equipmentServices } from './services/equipmentServices.service';
import { fieldServices } from './services/fieldServices.service';
import { UpdateEquipmentComponent } from './UpdatePages/update-equipment/update-equipment.component';
import { UpdateFieldComponent } from './UpdatePages/update-field/update-field.component';
import { UpdateGameSummaryComponent } from './UpdatePages/update-game-summary/update-game-summary.component';
import { UpdateRefereeComponent } from './UpdatePages/update-referee/update-referee.component';
import { UpdateCoachComponent } from './UpdatePages/update-coach/update-coach.component';
import { UpdateTeamComponent } from './UpdatePages/update-team/update-team.component';
import { gameServices } from './services/gameServices.service';
import { gameSummaryServices } from './services/gameSummaryServices.service';
import { participateServices } from './services/participateServices.service';
import { refereeServices } from './services/refereeServices.service';
import { teamServices } from './services/teamServices.service';
import { AddAthleticParkComponent } from './AddPages/add-athletic-park/add-athletic-park.component';
import { AddCoachComponent } from './AddPages/add-coach/add-coach.component';
import { AddEquipmentComponent } from './AddPages/add-equipment/add-equipment.component';
import { AddTournamentComponent } from './AddPages/add-tournament/add-tournament.component';
import { AddFieldComponent } from './AddPages/add-field/add-field.component';
import { AddGameComponent } from './AddPages/add-game/add-game.component';
import { AddRefereeComponent } from './AddPages/add-referee/add-referee.component';
import { AddTeamComponent } from './AddPages/add-team/add-team.component';
import { AddPlayerComponent } from './AddPages/add-player/add-player.component';
import { AddParticipateComponent } from './AddPages/add-participate/add-participate.component';
import { AddGameSummaryComponent } from './AddPages/add-game-summary/add-game-summary.component';
import { ViewTournamentComponent } from './ViewPages/view-tournament/view-tournament.component';
import { ViewAthleticParkComponent } from './ViewPages/view-athletic-park/view-athletic-park.component';
import { ViewEquipmentComponent } from './ViewPages/view-equipment/view-equipment.component';
import { ViewRefereeComponent } from './ViewPages/view-referee/view-referee.component';
import { ViewCoachComponent } from './ViewPages/view-coach/view-coach.component';
import { ViewParticipationComponent } from './ViewPages/view-participation/view-participation.component';
import { ViewTournamentPlayerComponent } from './ViewPages/view-tournament-player/view-tournament-player.component';
import { ViewField1Component } from './ViewPages/view-field1/view-field1.component';
import { ViewField2Component } from './ViewPages/view-field2/view-field2.component';
import { ViewGame1Component } from './ViewPages/view-game1/view-game1.component';
import { ViewGame2Component } from './ViewPages/view-game2/view-game2.component';
import { ViewGame1PlayerComponent } from './ViewPages/view-game1-player/view-game1-player.component';
import { ViewGame2PlayerComponent } from './ViewPages/view-game2-player/view-game2-player.component';
import { ViewField1PlayerComponent } from './ViewPages/view-field1-player/view-field1-player.component';
import { ViewField2PlayerComponent } from './ViewPages/view-field2-player/view-field2-player.component';
import { ViewGamesum1Component } from './ViewPages/view-gamesum1/view-gamesum1.component';
import { ViewGamesum2Component } from './ViewPages/view-gamesum2/view-gamesum2.component';
import { ViewGamesum1PlayerComponent } from './ViewPages/view-gamesum1-player/view-gamesum1-player.component';
import { ViewGamesum2PlayerComponent } from './ViewPages/view-gamesum2-player/view-gamesum2-player.component';
import { ViewTeam1Component } from './ViewPages/view-team1/view-team1.component';
import { ViewTeam1PlayerComponent } from './ViewPages/view-team1-player/view-team1-player.component';
import { ViewTeam2Component } from './ViewPages/view-team2/view-team2.component';
import { ViewTeam2PlayerComponent } from './ViewPages/view-team2-player/view-team2-player.component';
import { ViewPlayerComponent } from './ViewPages/view-player/view-player.component';
import { ViewPlayer2Component } from './ViewPages/view-player2/view-player2.component';
import { ViewPlayerPlayerComponent } from './ViewPages/view-player-player/view-player-player.component';
import { ViewPlayer2PlayerComponent } from './ViewPages/view-player2-player/view-player2-player.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LoggedPlayerComponent,
    RegistrationTOComponent,
    LoggedOrganizerComponent,
    TournamentpageComponent,
    AthleticParkPageComponent,
    EquipmentPageComponent,
    FieldPageComponent,
    GamePageComponent,
    GameSumPageComponent,
    RefereeComponent,
    CoachPageComponent,
    TeamPageComponent,
    PlayerPageComponent,
    ParticipatePageComponent,
    TournamentOrganizerLoginComponent,
    PlayerLoginComponent,
    DeleteTournamentComponent,
    DeleteAthleticParkComponent,
    DeleteEquipmentComponent,
    DeleteFieldComponent,
    DeleteGameComponent,
    DeleteGameSummaryComponent,
    DeleteRefereeComponent,
    DeleteCoachComponent,
    DeleteTeamComponent,
    DeletePlayerComponent,
    DeleteParticipateComponent,
    UpdateTournamentComponent,
    UpdateAthleticParkComponent,
    UpdatePlayerComponent,
    UpdateGameComponent,
    UpdateEquipmentComponent,
    UpdateFieldComponent,
    UpdateGameSummaryComponent,
    UpdateRefereeComponent,
    UpdateCoachComponent,
    UpdateTeamComponent,
    AddAthleticParkComponent,
    AddCoachComponent,
    AddEquipmentComponent,
    AddTournamentComponent,
    AddFieldComponent,
    AddGameComponent,
    AddRefereeComponent,
    AddTeamComponent,
    AddPlayerComponent,
    AddParticipateComponent,
    AddGameSummaryComponent,
    ViewTournamentComponent,
    ViewAthleticParkComponent,
    ViewEquipmentComponent,
    ViewRefereeComponent,
    ViewCoachComponent,
    ViewParticipationComponent,
    ViewTournamentPlayerComponent,
    ViewField1Component,
    ViewField2Component,
    ViewGame1Component,
    ViewGame2Component,
    ViewGame1PlayerComponent,
    ViewGame2PlayerComponent,
    ViewField1PlayerComponent,
    ViewField2PlayerComponent,
    ViewGamesum1Component,
    ViewGamesum2Component,
    ViewGamesum1PlayerComponent,
    ViewGamesum2PlayerComponent,
    ViewTeam1Component,
    ViewTeam1PlayerComponent,
    ViewTeam2Component,
    ViewTeam2PlayerComponent,
    ViewPlayerComponent,
    ViewPlayer2Component,
    ViewPlayerPlayerComponent,
    ViewPlayer2PlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [playerServices,
              toServices,
              tournamentServices,
              athleticParkServices,
              coachServices,
              equipmentServices,
              fieldServices,
              gameServices,
              gameSummaryServices,
              participateServices,
              refereeServices,
              teamServices
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
