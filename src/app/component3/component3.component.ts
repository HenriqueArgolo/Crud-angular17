import { Component } from '@angular/core';

@Component({
  selector: 'app-component3',
  standalone: true,
  imports: [],
  templateUrl: './component3.component.html',
  styleUrl: './component3.component.css'
})
export class Component3Component {
imagem:string = 'assets/image1.png'

//alterar imagem

alterarImagem(){
  if(this.imagem === 'assets/image1.png'){
    this.imagem = 'assets/image2.jpeg'
  }else {
    this.imagem = 'assets/image1.png'
  }

}
}
