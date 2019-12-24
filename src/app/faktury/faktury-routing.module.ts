import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FakturyComponent } from './faktury/faktury.component';

const routes: Routes = [
    {
		path: '',
		component: FakturyComponent
	}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FakturyRoutingModule { }
