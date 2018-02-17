import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupsPage } from './groups';

@NgModule({
  declarations: [
    GroupsPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupsPage),
  ],
})
export class GroupsPageModule {}
