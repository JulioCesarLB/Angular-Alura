import { ListaContatoComponent } from './pagina/lista-contato/lista-contato.component';
import { Routes } from '@angular/router';
import { FormularioContatoComponent } from './pagina/formulario-contato/formulario-contato.component';
import { PerfilContatoComponent } from './pagina/perfil-contato/perfil-contato.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'lista-contatos',
        pathMatch:'full'
    },
    {
        path:'formulario',
        component:FormularioContatoComponent
    },
    {
        path:'lista-contatos',
        component:ListaContatoComponent
    },
    {
        path:'perfil-contato/:id',
        component:PerfilContatoComponent
    }
];
