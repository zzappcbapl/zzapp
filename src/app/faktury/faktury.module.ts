import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule, FormsModule}    from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { FakturyRoutingModule } from './faktury-routing.module';
import { FakturyComponent } from './faktury/faktury.component';

@NgModule({
    declarations: [FakturyComponent],
    imports: [
        CommonModule,
        FakturyRoutingModule,
        FlexLayoutModule,
        MatTableModule,
        ReactiveFormsModule,
        FormsModule,
        MatSelectModule,
        MatSlideToggleModule
  ]
})
export class FakturyModule { }
