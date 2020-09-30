import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CpcClasseComptable } from '../model/cpc-classe-comptable.model';

@Injectable({
  providedIn: 'root'
})
export class CpcClasseComptableService {

  private _cpcClasseComptable = new CpcClasseComptable();
  private _cpcClasseComptables = new Array<CpcClasseComptable>();


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

  private clone(cpcClasseComptable: CpcClasseComptable){
    const myClone = new CpcClasseComptable();
    myClone.montant = cpcClasseComptable.montant;
    return myClone;
  }


  public save() {
    this.http.post<CpcClasseComptable>('http://localhost:8090/accountingProject/CpcCompteComptable/', this.cpcClasseComptable).subscribe(
      data => {
        if (data != null) {
          this.cpcClasseComptables.push(this.clone(this.cpcClasseComptable));
          this.cpcClasseComptable = null;
          console.log(data);
        } else {
          console.log(data);
        }
      }
    )
  }

  public findAll() {
    this.http.get<Array<CpcClasseComptable>>('http://localhost:8090/accountingProject/CpcCompteComptable/').subscribe(
      data => {
        this.cpcClasseComptables = data;
        console.log(data);
      }
    )
  }

  public delete(id: number, i: number) {
    this.http.delete<number>('http://localhost:8090/accountingProject/CpcCompteComptable/id/' + id).subscribe(
      data => {
        this.cpcClasseComptables.splice(i,1);
        console.log(data);
      }
    )
  }
}
