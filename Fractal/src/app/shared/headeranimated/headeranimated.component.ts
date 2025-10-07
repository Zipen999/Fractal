import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-headeranimated',
    imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './headeranimated.component.html',
  styleUrl: './headeranimated.component.css'
})
export class HeaderanimatedComponent {
  navItems = [
    { label: 'Home', path: '/' },
    { label: 'Members', path: '/members' },
    { label: 'Videos', path: '/videos' },
  ];

  // Logic for a toggle if you have a mobile menu
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }

}
