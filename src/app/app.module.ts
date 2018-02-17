import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { BuddiesPage } from '../pages/buddies/buddies';
import { SignupPage } from '../pages/signup/signup';
import { PasswordresetPage } from '../pages/passwordreset/passwordreset';
import { WelcomuserPage } from '../pages/welcomuser/welcomuser';
import { FoodandcrinkPage } from '../pages/foodandcrink/foodandcrink';
import { MaptrackPage } from '../pages/maptrack/maptrack';

import { config } from './app.firebaseconfig';
import { AngularFireAuth } from 'angularfire2/auth';

import { AngularFireModule } from 'angularfire2';
import { AuthProvider } from '../providers/auth/auth';
import { UserProvider } from '../providers/user/user';
import { ImghandlerProvider } from '../providers/imghandler/imghandler';
import { RequestsProvider } from '../providers/requests/requests';
import { ChatProvider } from '../providers/chat/chat';
import { GroupsProvider } from '../providers/groups/groups';
import { Geolocation } from '@ionic-native/geolocation';
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    PasswordresetPage,
    WelcomuserPage,
    FoodandcrinkPage,
    MaptrackPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {tabsPlacement: 'top'} ),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    PasswordresetPage,
    WelcomuserPage,
    FoodandcrinkPage,
    MaptrackPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    FilePath,
    FileChooser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AngularFireAuth,
    UserProvider,
    ImghandlerProvider,
    RequestsProvider,
    ChatProvider,
    GroupsProvider,
    Geolocation
  ]
})
export class AppModule {}
