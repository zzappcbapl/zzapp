interface TabelaPracownikow {
  lp: number;
  imie: string;
  nazwisko: string;
  stanowisko: string;
  dataZatrudnienia: string;
  dniUrlopu: number;
};
export const TABELA_PRACOWNIKOW: TabelaPracownikow[] = [
    { lp: 1, imie: 'Dawid', nazwisko: 'Sikorski', stanowisko: 'ksiegowy', dataZatrudnienia: '09/05/2011', dniUrlopu: 0},
    { lp: 2, imie: 'Malgorzata', nazwisko: 'Kowalska', stanowisko: 'sekretarka', dataZatrudnienia: '19/09/2015', dniUrlopu: 22},
    { lp: 3, imie: 'Tomek', nazwisko: 'Wojtkowiak', stanowisko: 'sp.ds.sprzedazy', dataZatrudnienia: '17/06/2015', dniUrlopu: 15},
    { lp: 4, imie: 'Piotr', nazwisko: 'Maleszka', stanowisko: 'k.zmiany', dataZatrudnienia: '06/12/2014', dniUrlopu: 5},
    { lp: 5, imie: 'Sandra', nazwisko: 'Nowakowska', stanowisko: 'z-ca.k.zmiany', dataZatrudnienia: '01/01/2015', dniUrlopu: 8},
    { lp: 6, imie: 'Marta', nazwisko: 'Gronostaj', stanowisko: 'kadrowa', dataZatrudnienia: '13/04/2012', dniUrlopu: 1}, 
];

interface TabelaVat {
    lp: number;
    opis: string;
    mpk: number;
    kNetto: number;
    ilosc: number;
    vat: number;
    kBrutto: number;
    wNetto: number;
    wBrutto: number;
    id: string;
};
export const TABELA_VAT: TabelaVat[] = [
    { lp: 1, opis: 'Uslugi transportowe', mpk: 263526, kNetto: 110.08, ilosc: 2, vat: 0, kBrutto: 0, wNetto: 0, wBrutto: 0, id: 'vatValue1'},
    { lp: 2, opis: 'Papier do drukarki', mpk: 346436, kNetto: 3000, ilosc: 1, vat: 0, kBrutto: 0, wNetto: 0, wBrutto: 0, id: 'vatValue2'},
    { lp: 3, opis: 'Artykuly spozywcze', mpk: 436436, kNetto: 1026.99, ilosc: 10, vat: 0, kBrutto: 0, wNetto: 0, wBrutto: 0, id: 'vatValue3'},
    { lp: 4, opis: 'Woda mineralna', mpk: 235352, kNetto: 10.5, ilosc: 18, vat: 0, kBrutto: 0, wNetto: 0, wBrutto: 0, id: 'vatValue4'},
    { lp: 5, opis: 'Firmowe dlugopisy', mpk: 4236272, kNetto: 2200, ilosc: 3, vat: 0, kBrutto: 0, wNetto: 0, wBrutto: 0, id: 'vatValue5'}
];

interface TabelaDelegacji {
    lp: number;
    imieNazwisko: string;
    dataOd: string;
    dataDo: string;
    miejsceWyjazdu: string;
    miejscePrzyjazdu: string;
};
export const TABELA_DELEGACJI: TabelaDelegacji[] = [];

interface TabelaKontrahentow {
    nip: number;
    regon: number;
    nazwa: string;
    platnikVat: string;
    ulica: string;
    nrDomu: number;
    nrMieszkania: number;
    akcje: any;
};
export const TABELA_KONTRAHENTOW: TabelaKontrahentow[] = [];