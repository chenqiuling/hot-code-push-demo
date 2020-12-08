import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    document.addEventListener('chcp_updateIsReadyToInstall', this.eventCallback.bind(this), false);
  }

  eventCallback() {
    alert('chcp_updateIsReadyToInstall enter');
    // const error = eventData.details.error;
    // if (error) {
    //   console.log('Error with code: ' + error.code);
    //   console.log('Description: ' + error.description);
    // }
  }
}

