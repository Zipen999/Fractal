// src/app/features/main/main.component.ts

import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component'; 
import { FooterComponent } from '../../shared/footer/footer.component'; 

@Component({
  standalone: true,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent] // Required for structural directives like *ngFor, and navigation, header, footer
})
export class MainComponent implements OnInit {

  // 1. Data model for carousel images
  // !! RETRIEVED FROM DB LATER !!
    carouselImages = [
        { url: 'images/car_showcase.gif', caption: 'Custom Vehicle Design' },
        { url: '/fractal_logo.png', caption: 'In-Game Logo' },
        { url: 'images/image.png', caption: 'Player Outfit' }
        // Add more images here
    ];

    // 2. State to track the active slide
    currentSlideIndex: number = 1;

    // 3. Navigation Methods
    nextSlide(): void {
        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.carouselImages.length;
    }

    prevSlide(): void {
        // The modulo operator handles wrapping from the first slide to the last
        this.currentSlideIndex = (this.currentSlideIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
    }

    goToSlide(index: number): void {
        this.currentSlideIndex = index;
    }

    // ------------------------------------------------------------------- Scroll listener for header ----------------------------------------
    isHeaderScrolled: boolean = false; 
   // Listen for scroll events on the window
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Check if the scroll position is past a certain threshold (10 pixels)
    // Or, check if it's past the height of the hero section (window.innerHeight)  
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const heroHeight = 10;

    // Update the state property
    if (scrollPosition >= heroHeight) {
      this.isHeaderScrolled = true;
    } else {
      this.isHeaderScrolled = false;
    }
    // console.log( "TESTING HEADER :" + this.isHeaderScrolled + " | height " + window.innerHeight + " | scrollPosition : " + scrollPosition)
  }

  scrollToNextSection(): void {
    // 1. Get a reference to the target element (the 'games-section-start' ID)
    const targetElement = document.getElementById('games-section-start');

    if (targetElement) {
      // 2. Scroll the element into view smoothly
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Aligns the top of the element to the top of the viewport
      });
    }
  }

  // ------------------------------------------------------------------- ----------------------------------------
  // Placeholder data for the games section
  featuredGames = [
    { name: 'League of Legends', logo: '/logos/lol.png' },
    { name: 'Apex', logo: '/logos/apex.png' },
    { name: 'APB', logo: '/logos/apb.png' },
    { name: 'CS', logo: '/logos/cs.png' },
    { name: 'Kovaak\'s', logo: '/logos/kovaaks.png' },
    // Add more games as needed
  ];

  constructor() { }

  ngOnInit(): void {
    // In a real app, you would call a service here to fetch this data:
    // this.dataService.getFeaturedContent().subscribe(data => this.featuredCards = data);
  }
}