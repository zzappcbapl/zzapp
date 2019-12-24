import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KontrahenciComponent } from './kontrahenci/kontrahenci.component';

const routes: Routes = [
    {
		path: '',
		component: KontrahenciComponent
	}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KontrahenciRoutingModule { }
