import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // private clanDataService = inject(ClanDataService);

  // // Observable to track the current user's role for conditional links
  //userRole$: Observable<'Admin' | 'Guest'> = this.clanDataService.getAuthRole();
  
  // Temporary hardcoded role until auth is implemented
  userRole$: Observable<'Admin' | 'Guest'> = 'Guest' as unknown as Observable<'Admin' | 'Guest'>;

  // Define your navigation items
  navItems = [
    { label: 'Members', path: '/members' },
    { label: 'Videos', path: '/videos' },
  ];

  // constructor() {
  //   console.log("USER:" + this.userRole$);
  // }

  // Logic for a toggle if you have a mobile menu
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }

}
