import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomuserPage } from './welcomuser';

@NgModule({
  declarations: [
    WelcomuserPage,
  ],
  imports: [
    IonicPageModule.forChild(WelcomuserPage),
  ],
})
export class WelcomuserPageModule {}
