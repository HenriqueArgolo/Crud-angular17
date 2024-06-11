import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component4.component.html',
  styleUrl: './component4.component.css'
})
export class Component4Component {
//EXIBIR OU OCULTAR QUADRADOR

exibir:boolean = true


changeExibir(){
  if (this.exibir === true){
    this.exibir = false;
  }else{
    this.exibir = true;
  }
}
}
