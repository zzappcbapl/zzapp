import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class DatabaseService {
	
	private baseURL: string = `http://zzapp.cba.pl/api/`;    
  	
    constructor(private http: HttpClient) { }
	
		
    public zaladujDelegacje(): Observable<any[]> {
        const URL = this.baseURL + `delegacje.php`;
        
        return this.http.get(URL) as Observable<any>;
    }
    public zaladujKontrahentow(): Observable<any[]> {
        const URL = this.baseURL + `kontrahenci.php`;
        
        return this.http.get(URL) as Observable<any>;
    }
    public dodajKontrahenta(formData: any): Observable<any> {
        const URL = this.baseURL + `dodaj_kontrahenta.php`;
	
		return this.http.post(URL, formData)		
	}
    public edytujKontrahenta(formData): Observable<any[]> {
        const URL = this.baseURL + `edytuj_kontrahenta.php`;
        
        return this.http.post(URL, formData) as Observable<any>; 
    }
    public usunKontrahenta(nip): Observable<any[]> {
        const URL = this.baseURL + `usun_kontrahenta.php`;
        
        return this.http.post(URL, nip) as Observable<any>;
    }
}