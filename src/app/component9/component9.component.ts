import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-component9',
  standalone: true,
  imports: [ReactiveFormsModule ],
  templateUrl: './component9.component.html',
  styleUrl: './component9.component.css'
})
export class Component9Component {
formulario = new FormGroup({
  nome: new FormControl(''),
  cidade: new FormControl('')
})
}
