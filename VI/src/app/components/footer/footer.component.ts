import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  imageUrl: string = 'assets/images/Pic1.jpg';
  isButtonDisabled: boolean = true;
  textColor: string = 'green';
}
