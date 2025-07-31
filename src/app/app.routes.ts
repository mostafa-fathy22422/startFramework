import {Routes} from '@angular/router';
import {Home} from './components/home/home';

export const routes: Routes = [
  {
    title: "home-page",
    path: "",
    pathMatch: "full",
    // loadComponent: () => import('../app/components/home/home').then(c => c.Home)
    component: Home,
  },
  {
    title: "about-page",
    path: "about",
    loadComponent: () => import('../app/components/about/about').then(c => c.About)
  },
  {
    title: "portfolio-page",
    path: "portfolio",
    loadComponent: () => import('../app/components/portfolio/portfolio').then(c => c.Portfolio)
  },
  {
    title: "contact-page",
    path: "contact",
    loadComponent: () => import('../app/components/contact/contact').then(c => c.Contact)
  },


];
