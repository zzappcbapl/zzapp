import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule, FormsModule, NgForm }    from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

import { KontrahenciRoutingModule } from './kontrahenci-routing.module';
import { KontrahenciComponent } from './kontrahenci/kontrahenci.component';


@NgModule({
    id: 'KontrahenciMod',
    declarations: [KontrahenciComponent],
    imports: [
        CommonModule,
        KontrahenciRoutingModule,
        FlexLayoutModule,
        MatTableModule,
		FormsModule,
		ReactiveFormsModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatButtonModule
  ]
})
export class KontrahenciModule { }
