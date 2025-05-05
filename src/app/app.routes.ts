import { Routes } from '@angular/router';
import { CondiComponent } from './condi/condi.component';
import { LocaltemComponent } from './localtem/localtem.component';
import { ChangeDetectorRef } from '@angular/core';
import { ChangedecComponent } from './changedec/changedec.component';
import { SignaldemoComponent } from './signaldemo/signaldemo.component';

export const routes: Routes = [
  {path:'', redirectTo:'condition',pathMatch:'full'},
  {path:'condition', component: CondiComponent},
  {path:'localtem', component: LocaltemComponent},
  {path:'changedet', component: ChangedecComponent},
  {path:'signaldemo', component: SignaldemoComponent},
];
