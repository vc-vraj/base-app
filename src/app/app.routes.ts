import { Routes } from "@angular/router";
import { SvgIconComponent } from "./components/svg-icon/svg-icon.component";
import { LoginComponent } from "./components/login/login.component";

export const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'svg' },
    { path: 'svg', component: SvgIconComponent },
    { path: 'login', component: LoginComponent },
    
];