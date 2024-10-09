import { ContatoService } from '../../services/contato.service';
import { Component, OnInit } from '@angular/core';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';

import { ContainerComponent } from '../../componentes/container/container.component';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Contato } from '../../componentes/contato/contato';

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
export class ListaContatoComponent implements OnInit {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = [];

  filtroPorTexto: String =''

  constructor(private contatoService: ContatoService){
  }

  ngOnInit(){
    this.contatos = this.contatoService.obterContatos();

  }


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
