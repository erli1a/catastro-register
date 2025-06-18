import { Routes } from '@angular/router';
import { Documentation } from './documentation/documentation';
import { Crud } from './crud/crud';
import { Empty } from './empty/empty';
import { RegisterCatastroComponent } from './register/register-catastro.component';

export default [
    { path: 'documentation', component: Documentation },
    { path: 'crud', component: Crud },
    { path: 'empty', component: Empty },
    { path: 'register', component: RegisterCatastroComponent },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
