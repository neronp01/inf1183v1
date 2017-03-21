import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common' ;

import {  JeuxComponent } from './jeux.component';


@NgModule({
imports: [CommonModule, RouterModule],
declarations: [JeuxComponent],
exports: [JeuxComponent],

})

export class HomeModule {}
