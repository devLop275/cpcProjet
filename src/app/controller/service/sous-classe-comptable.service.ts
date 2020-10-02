import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SousClasseComptable } from '../model/sous-classe-comptable.model';

@Injectable({
  providedIn: 'root'
})
export class SousClasseComptableService {

  private baseUrl = 'http://localhost:8090/ProjetCpc/SousClasseComptable';
  private _sousClasseComptable = new SousClasseComptable();
  private _sousClasseComptables = Array<SousClasseComptable>();

  constructor(private http: HttpClient) { }

  private clone(sousClasseComptable: SousClasseComptable) {
    const myClone = new SousClasseComptable();
    myClone.id = sousClasseComptable.id;
    myClone.numero = sousClasseComptable.numero;
    myClone.libelle = sousClasseComptable.libelle;
    myClone.classeComptable = sousClasseComptable.classeComptable;
    myClone.classeComptable.libelle = sousClasseComptable.classeComptable.libelle;
    return myClone;
  }


  public save(){
    this.http.post<SousClasseComptable>(this.baseUrl + '/', this.sousClasseComptable).subscribe(data => {
      if (data != null) {
        this.sousClasseComptables.push( this.clone(this.sousClasseComptable));
        this._sousClasseComptable = null;
        console.log(data);
      } else {
        console.log('Erreur de enregistrement :' + data);
      }
    });
  }

  public update() {
    this.http.put<number>(this.baseUrl + '/update/', this.sousClasseComptable).subscribe(data => {
      if (data > 0) {
        const index = this.sousClasseComptables.findIndex(p => p.id === this.sousClasseComptable.id);
        this.sousClasseComptables[index] = this.sousClasseComptable;
        this.sousClasseComptable = null;
      }
      else {
        console.log('Erreur modification : ' + data);
      }
    });
  }

  public findAll() {
    this.http.get<Array<SousClasseComptable>>(this.baseUrl + '/').subscribe(data => {
      this.sousClasseComptables = data;
    });
  }

  public getAll() {
    return this.http.get<Array<SousClasseComptable>>(this.baseUrl + '/');
  }

  public delete(id: number, i: number) {
    if (confirm('Voulez-vous vraimenet faire?')) {
      this.http.delete<number>(this.baseUrl + '/id/' + id).subscribe(data => {
        if (data > 0) {
          this.sousClasseComptables.splice(i, data);
        }
      });
    }
  }


  get sousClasseComptable(): SousClasseComptable {
    if (this._sousClasseComptable == null ) {
      this._sousClasseComptable = new SousClasseComptable();
    }
    return this._sousClasseComptable;
  }

  set sousClasseComptable(value: SousClasseComptable) {
    this._sousClasseComptable = value;
  }


  get sousClasseComptables(): Array<SousClasseComptable> {
    if (this._sousClasseComptables == null) {
      this._sousClasseComptables = new Array<SousClasseComptable>();
    }
    return this._sousClasseComptables;
  }

  set sousClasseComptables(value: Array<SousClasseComptable>) {
    this._sousClasseComptables = value;
  }

 // public getExcel(): Observable<Blob> {
   // return this.http.post<Blob>("http://localhost:8090/accountingProject/OperationComptable/excel/", this.operationsComptable, {responseType: 'blob' as 'json'})
  //}‏  

}
