import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuddychatPage } from './buddychat';

@NgModule({
  declarations: [
    BuddychatPage,
  ],
  imports: [
    IonicPageModule.forChild(BuddychatPage),
  ],
})
export class BuddychatPageModule {}
