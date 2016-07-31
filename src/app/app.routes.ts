import { provideRouter, RouterConfig } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { ItemsComponent } from "./items/items.component";

const routes: RouterConfig = [
  { path: 'login', component: LoginComponent },
  { path: 'items', component: ItemsComponent },
];

export const appRouterProviders = [
  provideRouter(routes)
];
