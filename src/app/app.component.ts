import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1Component } from './componente1/componente1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { Component5Component } from './component5/component5.component';
import { Component6Component } from './component6/component6.component';
import { Component7Component } from './component7/component7.component';
import { Component8Component } from './component8/component8.component';
import { Component9Component } from './component9/component9.component';
import { Component10Component } from './component10/component10.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Componente1Component, Component2Component, Component3Component, Component4Component, Component5Component, Component6Component,Component7Component, Component8Component, Component9Component, Component8Component, Component10Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basico';

  
}
