import { Component } from '@angular/core';
import { Gallery } from '../gallery';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  path:string="" ;
  images:Gallery[]=[
    {img:'./assets/image/poert1.png'},
    {img:'./assets/image/port2.png'},
    {img:'./assets/image/port3.png'},
    {img:'./assets/image/poert1.png'},
    {img:'./assets/image/port2.png'},
    {img:'./assets/image/port3.png'},
  ]
  
  display(y:Gallery): void {
    this.path=y.img ;
  }
}
