import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common' ;

import {  RobotUnComponent } from './robot-un.component';


@NgModule({
imports: [CommonModule, RouterModule],
declarations: [RobotUnComponent],
exports: [RobotUnComponent],

})

export class HomeModule {}
