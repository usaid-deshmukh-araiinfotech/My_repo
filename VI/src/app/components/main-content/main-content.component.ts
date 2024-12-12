import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  standalone: false,
  
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
  title = 'Welcome to My Angular App';

  onButtonClick() {
    alert('Button clicked!');
  }

  
    userName = 'Usaid D';
  
}
