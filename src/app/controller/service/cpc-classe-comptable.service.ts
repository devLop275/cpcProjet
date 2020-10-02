import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CpcClasseComptable } from '../model/cpc-classe-comptable.model';

@Injectable({
  providedIn: 'root'
})
export class CpcClasseComptableService {

  private _cpcClasseComptable = new CpcClasseComptable();
  private _cpcClasseComptables = new Array<CpcClasseComptable>();
  private baseUrl = 'http://localhost:8091/ProjetCpc/CpcClasseComptable';


  constructor(private http: HttpClient) { }

  get cpcClasseComptable(): CpcClasseComptable {
    if (this._cpcClasseComptable == null) {
      this._cpcClasseComptable = new CpcClasseComptable();
    }
    return this._cpcClasseComptable;
  }

  set cpcClasseComptable(value: CpcClasseComptable) {
    this._cpcClasseComptable = value;
  }

  get cpcClasseComptables(): Array<CpcClasseComptable> {
    if (this._cpcClasseComptables == null) {
      this._cpcClasseComptables = new Array<CpcClasseComptable>();
    }
    return this._cpcClasseComptables;
  }

  set cpcClasseComptables(value: Array<CpcClasseComptable>) {
    this._cpcClasseComptables = value;
  }

  public clone(cpcClasseComptable: CpcClasseComptable){
    const myClone = new CpcClasseComptable();
    myClone.id = cpcClasseComptable.id;
    myClone.montant = cpcClasseComptable.montant;
    myClone.cpcSousClasse = cpcClasseComptable.cpcSousClasse;
    return myClone;
  }


  public save() {
    this.http.post<CpcClasseComptable>(this.baseUrl + '/', this.cpcClasseComptable).subscribe(
      data => {
        if (data != null) {
          this.cpcClasseComptable.id = data.id;
          this.cpcClasseComptables.push(this.clone(this.cpcClasseComptable));
          this.cpcClasseComptable = null;
          console.log(data);
        } else {
          console.log(data);
        }
      }
    )
  }

  public update() {
    this.http.put<number>(this.baseUrl + '/update/', this.cpcClasseComptable).subscribe(data => {
      if (data > 0) {
        const index = this.cpcClasseComptables.findIndex(p => p.id === this.cpcClasseComptable.id);
        this.cpcClasseComptables[index] = this.cpcClasseComptable;
        this.cpcClasseComptable = null;
      }
      else {
        console.log('Erreur modification : ' + data);
      }
    });
  }

  public findAll() {
    this.http.get<Array<CpcClasseComptable>>(this.baseUrl + '/').subscribe(
      data => {
        this.cpcClasseComptables = data;
        console.log(data);
      }
    )
  }

  public delete(id: number, i: number) {
    this.http.delete<number>(this.baseUrl +'/id/' + id).subscribe(
      data => {
        this.cpcClasseComptables.splice(i,1);
        console.log(data);
      }
    )
  }
}
