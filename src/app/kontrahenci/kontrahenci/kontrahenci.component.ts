import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';

import { DatabaseService } from '../../_services';
import { TABELA_DELEGACJI } from '../../_data';

@Component({
    moduleId: 'KontrahenciMod',
    selector: 'app-kontrahenci',
    templateUrl: './kontrahenci.component.html',
    styleUrls: ['./kontrahenci.component.scss']
})
export class KontrahenciComponent implements OnInit {
    @ViewChild('kontForm', {static: true}) kontForm: ElementRef;
    
    public kontrahentForm: FormGroup;
	public addFormOpen: boolean = false;
    
	public actionSelect: string = '';
    
    public editIndeks: number;

    public tableColumns: string[] = [
        'nip',
        'regon',
        'nazwa',
        'platnikVat',
        'ulica',
        'nrDomu',
        'nrMieszkania',
        'akcje'
    ];
    
    public dataSource = [];
    
    constructor(
        private fb: FormBuilder,
		private databaseService: DatabaseService,
        private _snackBar: MatSnackBar
    ) { }

    ngOnInit() {
        this.init(this.databaseService);
        
        this.kontrahentForm = this.fb.group({
			kontFormNip: ['', [
                Validators.required, 
                Validators.maxLength(10),
                Validators.min(1),
            ]],
			kontFormRegon: new FormControl('', [
                Validators.required, 
                Validators.min(1),
            ]),
			kontFormNazwa: new FormControl('', Validators.required),
			kontFormPlatnikVat: [false],
			kontFormUlica: new FormControl('', Validators.required),
			kontFormNrDomu: new FormControl('', [
                Validators.required, 
                Validators.min(1),
            ]),
			kontFormNrMieszkania: new FormControl('', [
                Validators.required,
                Validators.min(1),
            ])
		});	
    }
    
    public get kf(): any { return this.kontrahentForm.controls; }
    private get getPostVars(): any {
        
        const postVars = {
            indeks: this.editIndeks,
			nip: this.kf.kontFormNip.value,
			regon: this.kf.kontFormRegon.value,
			nazwa: this.kf.kontFormNazwa.value,
			platnikVat: this.kf.kontFormPlatnikVat.value ? 1 : 0,
			ulica: this.kf.kontFormUlica.value,
			nrDomu: this.kf.kontFormNrDomu.value,
			nrMieszkania: this.kf.kontFormNrMieszkania.value
		};
        
        return postVars;
    }
    
    private init(service: any) {
        service.zaladujKontrahentow().subscribe((data: any[]) => {
            
			this.dataSource = data;
		})
	}    
    public getErrorMessage(elem: string) {
        let err;
        
        switch(elem) {
            case 'nip':
                err = this.kf.kontFormNip.hasError('required')
                    ? 'Brak NIPU'
                    : this.kf.kontFormNip.hasError('maxlength')
                    ? 'Max 10 cyfr'                
                    : this.kf.kontFormNip.hasError('min')
                    ? 'NIP musi być większy od zera'
                    : '';
                break;
                
            case 'regon':
                err = this.kf.kontFormRegon.hasError('required')
                    ? 'Brak REGONU'
                    : this.kf.kontFormRegon.hasError('min')
                    ? 'REGON musi być większy od zera'
                    : '';
                break;
                
            case 'nazwa':
                err = 'Brak NAZWY';
                break;          
                           
            case 'ulica':
                err = 'Brak ULICY';
                break;
                
            case 'nrDomu':
                err = this.kf.kontFormNrDomu.hasError('required')
                    ? 'Brak NUMERU DOMU'
                    : this.kf.kontFormNrDomu.hasError('min')
                    ? 'NR DOMU musi być większy od zera'
                    : '';
                break;
                
            case 'nrMieszkania':
                err = this.kf.kontFormNrMieszkania.hasError('required')
                    ? 'Brak NUMERU MIESZKANIA'
                    : this.kf.kontFormNrMieszkania.hasError('min')
                    ? 'NR MIESZKANIA musi być większy od zera'
                    : '';
                break; 
        }        
        return err;
    }	
	public onSubmit() {
		if (this.kontrahentForm.invalid) return;
        
        let postVars = this.getPostVars;
		
		if(this.actionSelect === 'add') {
            this.addEntry(postVars);
        }
        else if(this.actionSelect === 'edit'){
            this.editEntry(postVars);
        }
    }
    public openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
            duration: 12000,
        });
    }
    public addEntry(postVars) {
        this.databaseService.dodajKontrahenta(postVars)
        .subscribe(
                (data) => {
                    this.addFormOpen = true;
					this.kontForm.nativeElement.reset();
                    this.openSnackBar(data[0], '');
                    this.init(this.databaseService);
                },
				(error) => {
					console.error(error);
                    this.openSnackBar(error[0], '');
                });
    }
    public editEntry(postVars) {
        this.databaseService.edytujKontrahenta(postVars)
        .subscribe(
                (data) => {
                    this.addFormOpen = false;
					this.kontForm.nativeElement.reset();
                    this.openSnackBar(data[0], '');
                    this.init(this.databaseService);
                },
				(error) => {
					console.error(error);
                    this.openSnackBar(error[0], '');
                });
    }
    public deleteEntry(index: number) {
        let data = this.dataSource[index],
            indeks = {
                indeks: data.indeks
            };
        
        this.databaseService.usunKontrahenta(indeks)
        .subscribe(
                (data) => {
                    this.openSnackBar(data[0], '');
                    this.init(this.databaseService);
                },
				(error) => {
					console.error(error);
                    this.openSnackBar(error[0], '');
                });
    }
    public editAction(action: string, index: number) {
        let data = this.dataSource[index];
        
        this.addFormOpen = true;
        this.actionSelect = action;
        this.editIndeks = data.indeks;
        
        this.kontrahentForm.controls['kontFormNip'].setValue(data.nip);
        this.kontrahentForm.controls['kontFormRegon'].setValue(data.regon);
        this.kontrahentForm.controls['kontFormNazwa'].setValue(data.nazwa);
        this.kontrahentForm.controls['kontFormPlatnikVat'].setValue(data.platnikVat);
        this.kontrahentForm.controls['kontFormUlica'].setValue(data.ulica);
        this.kontrahentForm.controls['kontFormNrDomu'].setValue(data.nrDomu);
        this.kontrahentForm.controls['kontFormNrMieszkania'].setValue(data.nrMieszkania);     
    }
    public addAction(action: string) {
        this.kontForm.nativeElement.reset();
        this.addFormOpen = true;
        this.actionSelect = action;
    }
}