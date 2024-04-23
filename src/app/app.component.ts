import { Component } from '@angular/core';
import { InAppBrowserObject } from '@awesome-cordova-plugins/in-app-browser';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { App } from '@capacitor/app';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private browser!: InAppBrowserObject;

  constructor(private iab: InAppBrowser) {
    this.openWeb();
  }

  openWeb() {
    this.browser = this.iab.create(
      environment.url,
      '_blank',
      {
        location: 'no',
        hidden: 'no',
        hardwareback: 'yes',
        toolbar: 'no',
        fullscreen: 'no',
        zoom: 'no'
      }
    );

    this.browser.on('exit').subscribe(() => {
      App.exitApp();
    })
  }
}
