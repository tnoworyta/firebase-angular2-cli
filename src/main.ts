import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase, AngularFire, AuthMethods, AuthProviders, firebaseAuthConfig } from 'angularfire2';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { appRouterProviders } from './app/app.routes';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app
  defaultFirebase({
    apiKey: "AIzaSyBulVYHp3MWlg_Mx8OqmKmtQwu7Ao51ZZg",
    authDomain: "mdoc1.firebaseapp.com",
    databaseURL: "https://mdoc1.firebaseio.com",
    storageBucket: "project-7103516944652309740.appspot.com"
  }),
  firebaseAuthConfig({
    provider: AuthProviders.Password,
    method: AuthMethods.Password
  }),
  disableDeprecatedForms(),
  provideForms(),
  appRouterProviders
]);
