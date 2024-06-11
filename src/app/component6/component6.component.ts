import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component6',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component6.component.html',
  styleUrl: './component6.component.css'
})
export class Component6Component {
  linguagem:string = "CS";
}
