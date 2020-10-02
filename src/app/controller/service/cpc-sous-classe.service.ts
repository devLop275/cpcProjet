import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CpcSousClasse } from '../model/cpc-sous-classe.model';

@Injectable({
  providedIn: 'root'
})
export class CpcSousClasseService {
 
  private _cpcSousClasse = new CpcSousClasse();
  private _cpcSousClasses = new Array<CpcSousClasse>();
  private baseUrl = 'http://localhost:8091/ProjetCpc/CpcSousClasse';

  constructor(private http: HttpClient) { }

  get cpcSousClasse(): CpcSousClasse {
    if (this._cpcSousClasse == null) {
      this._cpcSousClasse = new CpcSousClasse();
    }
    return this._cpcSousClasse;
  }

  set cpcSousClasse(value: CpcSousClasse) {
    this._cpcSousClasse = value;
  }

  get cpcSousClasses(): Array<CpcSousClasse> {
    if (this._cpcSousClasses == null) {
      this._cpcSousClasses = new Array<CpcSousClasse>();
    }
    return this._cpcSousClasses;
  }

  set cpcSousClasses(value: Array<CpcSousClasse>) {
    this._cpcSousClasses = value;
  }

  public clone(cpcsousclaase: CpcSousClasse){
    const myClone = new CpcSousClasse();
    myClone.id = cpcsousclaase.id;
    myClone.montant = cpcsousclaase.montant;
    myClone.cpc = cpcsousclaase.cpc;
    return myClone;
  }

  public getAllCpcSousClasses(){
    return this.http.get<CpcSousClasse[]>(this.baseUrl+'/');
  }

  public update() {
    this.http.put<number>(this.baseUrl + '/update/', this.cpcSousClasse).subscribe(data => {
      if (data > 0) {
        const index = this.cpcSousClasses.findIndex(p => p.id === this.cpcSousClasse.id);
        this.cpcSousClasses[index] = this.cpcSousClasse;
        this.cpcSousClasse = null;
      }
      else {
        console.log('Erreur modification : ' + data);
      }
    });
  }


  public save() {
    this.http.post<CpcSousClasse>( this.baseUrl +'/', this.cpcSousClasse).subscribe(
      data => {
        if (data != null){
          this.cpcSousClasse.id = data.id;
          this.cpcSousClasses.push(this.clone(this.cpcSousClasse));
          this.cpcSousClasse = null;
          console.log(data);
        } else {
          console.log(data);
        }
      }
    )
  }

  public findAll() {
    this.http.get<Array<CpcSousClasse>>(this.baseUrl + '/').subscribe(
      data => {
        this.cpcSousClasses = data;
        console.log(data);
      }
    )
  }

  public delete(id: number, i: number) {
    this.http.delete<number>(this.baseUrl + '/id/' + id).subscribe(
      data => {
        this.cpcSousClasses.splice(i, 1);
        console.log(data);
      }
    )
  }
}
