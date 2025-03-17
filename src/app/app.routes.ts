import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages-area/home/home.component';
import { AboutComponent } from './components/pages-area/about/about.component';
import { ProjectsComponent } from './components/pages-area/projects/projects.component';
import { ContactComponent } from './components/pages-area/contact/contact.component';
import { Page404Component } from './components/layout-area/page404/page404.component';

export const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "projects", component: ProjectsComponent },
    { path: "contact", component: ContactComponent },
    { path: "**", component: Page404Component }
];
