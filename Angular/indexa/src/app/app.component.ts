import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormularioContatoComponent } from './pagina/formulario-contato/formulario-contato.component';
import { ListaContatoComponent } from './pagina/lista-contato/lista-contato.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    FormularioContatoComponent,
    ListaContatoComponent,
    RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
