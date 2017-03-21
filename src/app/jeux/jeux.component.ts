import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

import { moveIn, fallIn, moveInLeft, rotationGear } from '../router.animations';
import { CartesComponent } from '../cartesJoueur/cartes.component';


@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft(), rotationGear()
  ],
  host: { '[@moveIn]': '' }

})
export class JeuxComponent implements OnInit {
  name: any;
  state: string = '';
  pathJoueur: string = '';


  constructor(public af: AngularFire, private router: Router) {
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.name = auth;
      }
    });
  }


  membres() {
    this.router.navigateByUrl('/members');
  }

  logout() {
    this.af.auth.logout().then((success) => {
      console.log(success);
      this.router.navigate(['/login'])
    });
  }
  ngOnInit() {
  }
  joueCarte(path: string) {
    this.pathJoueur = path;
  }
}
