import { Routes } from '@angular/router';
import { CondiComponent } from './condi/condi.component';
import { LocaltemComponent } from './localtem/localtem.component';

export const routes: Routes = [
  {path:'', redirectTo:'condition',pathMatch:'full'},
  {path:'condition', component: CondiComponent},
  {path:'localtem', component: LocaltemComponent},
];
