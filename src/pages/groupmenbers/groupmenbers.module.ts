import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupmenbersPage } from './groupmenbers';

@NgModule({
  declarations: [
    GroupmenbersPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupmenbersPage),
  ],
})
export class GroupmenbersPageModule {}
