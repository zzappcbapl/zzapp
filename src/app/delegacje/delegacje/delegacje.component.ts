import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { DatabaseService } from '../../_services';
import { TABELA_DELEGACJI } from '../../_data';

@Component({
    moduleId: 'DelegacjeMod',
    selector: 'app-delegacje',
    templateUrl: './delegacje.component.html',
    styleUrls: ['./delegacje.component.scss']
})
export class DelegacjeComponent implements OnInit {
    
    public tableColumns: string[] = [
        'lp',
        'imieNazwisko',
        'dataOd',
        'dataDo',
        'miejsceWyjazdu',
        'miejscePrzyjazdu'
    ];
    
    public dataSource = [];
    
    constructor(private databaseService: DatabaseService) { }

    ngOnInit() {
        this.init(this.databaseService);
    }
    
    private init(service: any) {
        service.zaladujDelegacje().subscribe((data: any[]) => {
            
			this.dataSource = data;
		})
	}
}