import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DelegacjeComponent } from './delegacje/delegacje.component';

const routes: Routes = [
    {
		path: '',
		component: DelegacjeComponent
	}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DelegacjeRoutingModule { }
