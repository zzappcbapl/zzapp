import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkStrategy, QuicklinkModule } from 'ngx-quicklink';

import { KontrolkiComponent } from './kontrolki/kontrolki/kontrolki.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/kontrolki',
        pathMatch: 'full'
    },
     { 
		path: 'kontrolki',
        component: KontrolkiComponent,
	},
    { 
		path: 'pracownicy',
        loadChildren: () => import('./pracownicy/pracownicy.module').then(mod => mod.PracownicyModule),
	},
    { 
		path: 'faktury',
        loadChildren: () => import('./faktury/faktury.module').then(mod => mod.FakturyModule),
	},
    { 
		path: 'delegacje',
        loadChildren: () => import('./delegacje/delegacje.module').then(mod => mod.DelegacjeModule),
	},
    { 
		path: 'kontrahenci',
        loadChildren: () => import('./kontrahenci/kontrahenci.module').then(mod => mod.KontrahenciModule),
	},
];

@NgModule({
    imports: [
      QuicklinkModule,
      RouterModule.forRoot(routes, {
          useHash: Boolean(history.pushState) === false,
          preloadingStrategy: QuicklinkStrategy,
          scrollPositionRestoration: 'top',
          onSameUrlNavigation: 'ignore',
//          enableTracing: true
      }),
  ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
