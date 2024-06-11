import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component7',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component7.component.html',
  styleUrl: './component7.component.css'
})
export class Component7Component {

  condicao:boolean = false
  status:string[] = ['aprovado', 'reprovado','aprovado', 'reprovado','aprovado', 'reprovado']

}
