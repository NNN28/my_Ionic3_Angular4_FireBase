import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuddiesPage } from './buddies';

@NgModule({
  declarations: [
    BuddiesPage,
  ],
  imports: [
    IonicPageModule.forChild(BuddiesPage),
  ],
})
export class BuddlesPageModule {}
