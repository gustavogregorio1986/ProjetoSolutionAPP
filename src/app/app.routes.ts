import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { AtivosComponent } from './pages/ativos/ativos.component';
import { InativosComponent } from './pages/inativos/inativos.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path:'sobre', component: SobreComponent },
    { path:'cadastro', component: CadastroComponent },
    { path:'consulta', component: ConsultaComponent },
    { path:'ativos', component: AtivosComponent },
    { path: 'inativos', component: InativosComponent }
];
