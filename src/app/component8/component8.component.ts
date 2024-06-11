import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component8',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component8.component.html',
  styleUrl: './component8.component.css'
})
export class Component8Component {
media:number = 5;
}
