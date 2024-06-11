import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-component10',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, BrowserModule],
  templateUrl: './component10.component.html',
  styleUrl: './component10.component.css'
})
export class Component10Component {
formulario = new FormGroup({
  nome: new FormControl('', (Validators.required, Validators.minLength(3))),
  idade: new FormControl('', (Validators.required, Validators.min(0), Validators.max(120))),
  cidade: new FormControl(null, (Validators.required, Validators.minLength(3)))
})

}
