import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderanimatedComponent } from '../../shared/headeranimated/headeranimated.component';

@Component({
  selector: 'app-members',
  imports: [HeaderanimatedComponent, FooterComponent],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent {

}