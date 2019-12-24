import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PracownicyComponent } from './pracownicy/pracownicy.component';

const routes: Routes = [
    {
		path: '',
		component: PracownicyComponent
	}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PracownicyRoutingModule { }
