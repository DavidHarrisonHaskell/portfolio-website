import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages-area/home/home.component';
import { AboutComponent } from './components/pages-area/about/about.component';
import { ProjectsComponent } from './components/pages-area/projects/projects.component';
import { ContactComponent } from './components/pages-area/contact/contact.component';

export const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "projects", component: ProjectsComponent },
    { path: "contact", component: ContactComponent }
];
