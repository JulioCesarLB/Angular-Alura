import { Component } from '@angular/core';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';

import agenda from '../../agenda.json';
import { ContainerComponent } from '../../componentes/container/container.component';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


interface Contato{
  id:number;
  nome:string;
  telefone:string;
}
@Component({
  selector: 'app-lista-contato',
  standalone: true,
  imports: [ContainerComponent,
    CabecalhoComponent, 
    SeparadorComponent,
    ContatoComponent,
    FormsModule,
  RouterLink],
  templateUrl: './lista-contato.component.html',
  styleUrl: './lista-contato.component.css'
})
export class ListaContatoComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = agenda;

  filtroPorTexto: String =''

  filtrarContatosPorTexto(): Contato[]{
    if(!this.filtroPorTexto){
      return this.contatos;
    }
    return this.contatos.filter(contato=>{
      return contato.nome.toLowerCase().includes(this.filtroPorTexto.toLowerCase());
    })
  }

  filtrarContatoPorLetraInicial(letra:string): Contato[]{
    return this.filtrarContatosPorTexto().filter(contato=>{
      return contato.nome.toLowerCase().startsWith(letra);
    })
  }
}
