import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CpcSousClasse } from '../model/cpc-sous-classe.model';

@Injectable({
  providedIn: 'root'
})
export class CpcSousClasseService {
 
  private _cpcsousclasse = new CpcSousClasse();
  private _cpcsousclasses = new Array<CpcSousClasse>();


  constructor(private http: HttpClient) { }

  get cpcsousclasse(): CpcSousClasse {
    if (this._cpcsousclasse == null) {
      this._cpcsousclasse = new CpcSousClasse();
    }
    return this._cpcsousclasse;
  }

  set cpcsousclasse(value: CpcSousClasse) {
    this._cpcsousclasse = value;
  }

  get cpcsousclasses(): Array<CpcSousClasse> {
    if (this._cpcsousclasses == null) {
      this._cpcsousclasses = new Array<CpcSousClasse>();
    }
    return this._cpcsousclasses;
  }

  set cpcsousclasses(value: Array<CpcSousClasse>) {
    this._cpcsousclasses = value;
  }

  private clone(cpcsousclaase: CpcSousClasse){
    const myClone = new CpcSousClasse();
    myClone.montant = cpcsousclaase.montant;
    return myClone;
  }


  public save() {
    this.http.post<CpcSousClasse>('http://localhost:8090/accountingProject/CpcSousClasse/', this.cpcsousclasse).subscribe(
      data => {
        if (data != null){
          this.cpcsousclasses.push(this.clone(this.cpcsousclasse));
          this.cpcsousclasse = null;
          console.log(data);
        } else {
          console.log(data);
        }
      }
    )
  }

  public findAll() {
    this.http.get<Array<CpcSousClasse>>('http://localhost:8090/accountingProject/CpcSousClasse/').subscribe(
      data => {
        this.cpcsousclasses = data;
        console.log(data);
      }
    )
  }

  public delete(id: number, i: number) {
    this.http.delete<number>('http://localhost:8090/accountingProject/CpcSousClasse/id/' + id).subscribe(
      data => {
        this.cpcsousclasses.splice(i, 1);
        console.log(data);
      }
    )
  }
}
