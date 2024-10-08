import { Injectable } from '@angular/core';

interface Contato{
  id:number;
  nome:string;
  telefone:string;
}
@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos: Contato[] =[
    {"id": 1, "nome": "Ana", "telefone": "29 278869420"},
    {"id": 2, "nome": "Antônio", "telefone": "38 128451235"},
    {"id": 3, "nome": "Ágata", "telefone": "38 128451235"}
  ]

  constructor() {
    const contatoLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage = contatoLocalStorageString? JSON.parse(contatoLocalStorageString):null;
    this.contatos= contatosLocalStorage || null;


    localStorage.setItem('contatos', JSON.stringify(this.contatos));

   }

   
}
