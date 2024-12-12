import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  imageUrl: string = 'https://images.app.goo.gl/u99Tx46gp93RQJvK9';
  isButtonDisabled: boolean = true;
  textColor: string = 'green';
}
