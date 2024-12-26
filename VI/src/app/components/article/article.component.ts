import { Component } from '@angular/core';
import { ArticleElement, SectionElement, FooterElement, HeaderElement } from '../Interfaces/article.interface';


@Component({
  selector: 'app-article',
  standalone: false,
  
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  article: ArticleElement = {
    title: 'Angular: The Framework',
    content: 'Angular is a platform for building mobile and desktop web applications.',
    author: ' D.D',
    date: new Date(),
  };

    section: SectionElement = {
    heading: 'Introduction to Angular',
    content: 'Angular is a powerful framework built by Google to help developers create dynamic applications.',
  };
   
  footer: FooterElement = {
    text: 'All rights reserved.',
    year: new Date().getFullYear(),
  };

  header: HeaderElement = {
    logo: 'assets/images/Pic1.jpg',
    title: 'My Angular App',
  };


}
