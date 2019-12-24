import { Component, OnInit } from '@angular/core';

import { TABELA_VAT } from '../../_data';

@Component({
    selector: 'app-faktury',
    templateUrl: './faktury.component.html',
    styleUrls: ['./faktury.component.scss']
})
export class FakturyComponent implements OnInit {

    public tableColumns: string[] = [
        'lp',
        'opis',
        'mpk',
        'kNetto',
        'ilosc',
        'vat',
        'kBrutto',
        'wNetto',
        'wBrutto'
    ];
    public dataSource = TABELA_VAT;

    public selectedValue;
    
    constructor() { }

    ngOnInit() { }
}
