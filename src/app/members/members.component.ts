import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';


import { moveIn, fallIn, moveInLeft, rotationGear  } from '../router.animations';

@Component({
  selector: 'app-other',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],

  animations: [moveIn(), fallIn(), moveInLeft(),rotationGear(),


  ],
  host: {'[@moveIn]': ''}
})

export class MembersComponent implements OnInit {
  name: any;
  state: string = '';

  constructor(public af: AngularFire,private router: Router) {

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });

  }

  logout() {
     this.af.auth.logout().then((success) => {
        console.log(success);
        this.router.navigate(['/login'])
      });
  }
jeux(){

this.router.navigateByUrl('/DameDePique');
}

  ngOnInit() {
  }

}
