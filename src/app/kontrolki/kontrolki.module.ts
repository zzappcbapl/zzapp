import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule, FormsModule}    from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { KontrolkiRoutingModule } from './kontrolki-routing.module';
import { KontrolkiComponent } from './kontrolki/kontrolki.component';

@NgModule({
    id: 'KontrolkiMod',
    declarations: [
        KontrolkiComponent
    ],
    imports: [
        CommonModule,
        KontrolkiRoutingModule,
        FlexLayoutModule,
        MatTableModule,
        ReactiveFormsModule,
        FormsModule,       
        MatSelectModule,
    ],
    exports: [
        KontrolkiComponent
    ]
})
export class KontrolkiModule { }
