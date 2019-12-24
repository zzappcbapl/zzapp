import { Component, OnInit } from '@angular/core';

import { LISTA_KOLOROW, LISTA_VAT, LISTA_ELEMENTOW } from '../../_data';

@Component({
    moduleId: 'KontrolkiMod',
    selector: 'kontrolki',
    templateUrl: './kontrolki.component.html',
    styleUrls: ['./kontrolki.component.scss']
})
export class KontrolkiComponent implements OnInit {
    
    public nip = '-';
    public regon: number = 0;
    public nazwa: string = '-';
    public data: string = '-';
    public ulica: string = '-';
    public nrdomu: number = 0;
    public nrmieszkania: number = 0;
    public uwagi: string = '-';
    
    public listaKolorow: any[] = [];
    public listaVat: any[] = [];
    public listaElementow: any[] = [];
    
     public kolor: string = 'Nie wybrano';
     public vat: string = 'Nie wybrano';
     public element: string = 'Nie wybrano';

    constructor() { }

    ngOnInit() {
        this.listaKolorow = LISTA_KOLOROW;
        this.listaVat = LISTA_VAT;
        this.listaElementow = LISTA_ELEMENTOW;       
    }    
    
     public onChange(elem) {
        console.log(elem);
        this.element = 'Element ' + elem;
    }  
}
