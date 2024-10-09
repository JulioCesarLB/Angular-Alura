import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  
  private contatos: Contato[] =[
    {"id": 1, "nome": "Ana", "telefone": "29 278869420", "email":"ana@gmail.com"},
    {"id": 2, "nome": "JAntônio", "telefone": "38 128451235","email":"janto@gmail.com"},
    {"id": 3, "nome": "CÁgata", "telefone": "38 128451235","email": "cagata@gmail.com"}
  ]

  constructor() {
    const contatoLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage = contatoLocalStorageString ? JSON.parse(contatoLocalStorageString):null;
    this.contatos.join(contatosLocalStorage || null);


    localStorage.setItem('contatos', JSON.stringify(this.contatos));

   }

   obterContatos(){
    return this.contatos;
   }

   salvarContatos(contato:Contato){
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
   }
   
}
