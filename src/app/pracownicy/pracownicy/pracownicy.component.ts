import { Component, OnInit } from '@angular/core';

import { TABELA_PRACOWNIKOW } from '../../_data';

@Component({
    moduleId: 'PracownicyMod',
    selector: 'pracownicy',
    templateUrl: './pracownicy.component.html',
    styleUrls: ['./pracownicy.component.scss']
})
export class PracownicyComponent implements OnInit {

   public tableColumns: string[] = [
       'lp', 
       'imie', 
       'nazwisko', 
       'stanowisko', 
       'dataZatrudnienia', 
       'dniUrlopu'
   ];
    
   public dataSource = TABELA_PRACOWNIKOW;
    
   public nieparzyste: string = 'nie wybrano';
   public parzyste: string = 'nie wybrano';
    
    constructor() { }

    ngOnInit() {
        
    }

}
