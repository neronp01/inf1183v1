import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { ClarityModule } from 'clarity-angular';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';
import { JeuxComponent } from './jeux/jeux.component';
import { RobotUnComponent } from './robot-un/robot-un.component';
import { RobotDeuxComponent } from './robot-deux/robot-deux.component';
import { RobotTroisComponent } from './robot-trois/robot-trois.component';
import { JoueurComponent } from './joueur/joueur.component';
import { CartesComponent } from './cartesJoueur/cartes.component';
import { CarteService } from './cartesJoueur/carte.service';
import { Cartes } from './cartesJoueur/cartes';
import { TableComponent } from './table/table.component';
import { CadranComponent } from './cadran/cadran.component';
import { ExpressionComponent } from './expression/expression.component';


export const firebaseConfig = {
   apiKey: "AIzaSyCuu9r-2UftCctkh_k8n2CjtjXUzFxvweg",
    authDomain: "inf1183-18825.firebaseapp.com",
    databaseURL: "https://inf1183-18825.firebaseio.com",
    storageBucket: "inf1183-18825.appspot.com",
    messagingSenderId: "263609424828"

};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    JeuxComponent,
    RobotUnComponent,
    RobotDeuxComponent,
    RobotTroisComponent,
    JoueurComponent,
    CartesComponent,
    TableComponent,
    CadranComponent,
    ExpressionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClarityModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),routes
  ],
  providers: [AuthGuard,CarteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
