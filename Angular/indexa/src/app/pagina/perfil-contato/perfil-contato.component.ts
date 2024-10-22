import { Contato } from './../../componentes/contato/contato';
import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from "../../componentes/separador/separador.component";
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [ContainerComponent, SeparadorComponent, RouterLink],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css'
})
export class PerfilContatoComponent implements OnInit {
  contato: Contato = {nome: "",
      telefone: "",
      email: "",
      aniversario: "",
      redes: "",
      observacoes: "",
      id: 0} ;

  constructor(private activatedRoute: ActivatedRoute, private service:ContatoService, private router: Router){

  }
  ngOnInit() {
    const id=this.activatedRoute.snapshot.paramMap.get("id");
    if(id){
      this.service.buscarContatoPorId(parseInt(id)).subscribe((contato)=>{
        this.contato = contato
      });
    }

  }

  delete(){
    this.service.deletePorId(this.contato.id).subscribe((contato)=>{
      alert(contato);
      this.router.navigateByUrl("/");
    });
  }
}
