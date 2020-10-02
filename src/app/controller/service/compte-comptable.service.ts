import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompteComptable } from '../model/compte-comptable.model';

@Injectable({
  providedIn: 'root'
})
export class CompteComptableService {

  private _compteComptable: CompteComptable=new CompteComptable();
  private _compteComptables: CompteComptable[];
  private baseUrl = 'http://localhost:8090/ProjetCpc/CompteComptable';
  

  constructor(private http: HttpClient) { }

  private clone(compteComptable: CompteComptable) {
    const myClone = new CompteComptable();
    myClone.id = compteComptable.id;
    myClone.code = compteComptable.code;
    myClone.libelle = compteComptable.libelle;
    myClone.sousClasseComptable = compteComptable.sousClasseComptable;
    myClone.sousClasseComptable.libelle = compteComptable.sousClasseComptable.libelle;
    return myClone;
  }

  public save(){
    this.http.post<CompteComptable>(this.baseUrl + '/', this.compteComptable).subscribe(data => {
      if (data != null) {
        console.log(data);
        this.compteComptable.id = data.id;
        this.compteComptables.push(this.clone(this.compteComptable));
        this._compteComptable = null;
      } else {
        console.log('Erreur de enregistrement :' + data);
      }
    });
  }

  public update() {
    this.http.put<number>(this.baseUrl + '/update/', this.compteComptable).subscribe(data => {
      if (data > 0) {
        const index = this.compteComptables.findIndex(p => p.id === this.compteComptable.id);
        this.compteComptables[index] = this.compteComptable;
        this.compteComptable = null;
      }
      else {
        console.log('Erreur modification : ' + data);
      }
    });
  }

  public findAll() {
    this.http.get<Array<CompteComptable>>(this.baseUrl + '/').subscribe(data => {
      this.compteComptables = data;
    });
  }

  public delete(code: string, i: number) {
    if (confirm('Voulez-vous vraimenet faire?')) {
      this.http.delete<number>(this.baseUrl + '/code/' + code).subscribe(data => {
        if (data > 0) {
          this.compteComptables.splice(i, data);
        }
      });
    }
  }

  public get compteComptable(): CompteComptable {
    if (this._compteComptable == null ) {
      this._compteComptable = new CompteComptable();
    }
    return this._compteComptable;
  }
  public set compteComptable(value: CompteComptable) {
    this._compteComptable = value;
  }

  public get compteComptables(): CompteComptable[] {
    return this._compteComptables;
  }
  public set compteComptables(value: CompteComptable[]) {
    this._compteComptables = value;
  }

}
