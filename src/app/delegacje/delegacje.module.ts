import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';

import { DelegacjeRoutingModule } from './delegacje-routing.module';
import { DelegacjeComponent } from './delegacje/delegacje.component';

@NgModule({
    id: 'DelegacjeMod',
    declarations: [DelegacjeComponent],
    imports: [
        CommonModule,
        DelegacjeRoutingModule,
        FlexLayoutModule,
        MatTableModule
    ]
})
export class DelegacjeModule { }
