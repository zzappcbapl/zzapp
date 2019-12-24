import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule, FormsModule}    from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { PracownicyRoutingModule } from './pracownicy-routing.module';
import { PracownicyComponent } from './pracownicy/pracownicy.component';


@NgModule({
    id: 'PracownicyMod',
    declarations: [PracownicyComponent],
    imports: [
        CommonModule,
        PracownicyRoutingModule,
        FlexLayoutModule,
        MatTableModule,
        ReactiveFormsModule,
        FormsModule,
        MatSelectModule,
    ],
   
})
export class PracownicyModule { }
