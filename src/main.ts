import * as Sentry from '@sentry/browser';

import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

Sentry.init({
  dsn: 'https://2a36b41754434c088ea934746466541b@sentry.io/1300460',
  environment: environment.production ? 'production' : 'development'
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
