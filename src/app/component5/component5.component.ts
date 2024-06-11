import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component5.component.html',
  styleUrl: './component5.component.css'
})
export class Component5Component {
  list:string[] = ['ana', 'paula' , 'anderson', 'gustavo'];
}
