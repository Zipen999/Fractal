import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet]
})
export class AppComponent implements OnInit {
  ngOnInit() {
    // Call the function to handle the splash screen removal
    
    this.hideSplashScreen();
  }

  hideSplashScreen() {
    const splashScreen = document.getElementById('app-splash-screen');
    
    // Safety check in case the element isn't found
    if (!splashScreen) {
      return;
    }

    // 1. Set a timer for 1000ms (1 second)
    setTimeout(() => {
      // 2. Add the CSS class to start the fade-out transition
      splashScreen.classList.add('fade-out');

      // 3. Optional: Remove the element from the DOM after the transition is complete
      //    (Wait slightly longer than the CSS transition time of 0.5s)
      setTimeout(() => {
        splashScreen.remove();
      }, 700); 

    }, 2000); // 0sec delay
  }
}
