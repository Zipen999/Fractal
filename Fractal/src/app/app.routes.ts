import { Routes } from '@angular/router';

export const routes: Routes = [
  // Redirect root path to the Main/Home page
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Lazy-loaded routes for your main views (Pages)
  {
    path: 'home',
    loadComponent: () => import('./features/main/main.component').then(c => c.MainComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'admin',
    loadComponent: () => import('./features/admin/admin.component').then(c => c.AdminComponent)
  },
  {
    path: 'members',
    loadComponent: () => import('./features/members/members.component').then(c => c.MembersComponent)
  },
  {
    path: 'videos',
    loadComponent: () => import('./features/videos/videos.component').then(c => c.VideosComponent)
  },

  // Optional: Fallback route for 404 (or redirect to home)
  { path: '**', redirectTo: 'home' }
];