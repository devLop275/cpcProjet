import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cpc } from '../model/cpc.model';

@Injectable({
  providedIn: 'root'
})
export class CpcService {

  private _cpc = new Cpc();
  private _cpcs = new Array<Cpc>();


  constructor(private http: HttpClient) { }

  get cpc(): Cpc {
    if (this._cpc == null) {
      this._cpc = new Cpc();
    }
    return this._cpc;
  }

  set cpc(value: Cpc) {
    this._cpc = value;
  }

  get cpcs(): Array<Cpc> {
    if (this._cpcs == null) {
      this._cpcs = new Array<Cpc>();
    }
    return this._cpcs;
  }

  set cpcs(value: Array<Cpc>) {
    this._cpcs = value;
  }

  private clone(cpc: Cpc){
    const myClone = new Cpc();
    myClone.dateDebut = cpc.dateDebut;
    myClone.dateFin = cpc.dateFin;
    myClone.montant = cpc.montant;
    myClone.referenceSociete = cpc.referenceSociete;
    myClone.totalCharge = cpc.totalCharge;
    myClone.totalProduit = cpc.totalProduit;
    myClone.resultat = cpc.resultat;
    return myClone;
  }

  public save() {
    this.http.post<Cpc>('http://localhost:8091/ProjetCpc/Cpc/', this.cpc).subscribe(
      data => {
        if (data != null ) {
          this.cpc.id = data.id;
          this.cpcs.push(this.clone(this.cpc));
          this.cpc = null;
          console.log(data);
        } else {
          console.log(data);
        }
      }
    )
  }

  public findAll() {
    this.http.get<Array<Cpc>>('http://localhost:8091/ProjetCpc/Cpc/').subscribe(
      data => {
        this.cpcs = data;
        console.log(data);
      }
    )
  }

  public delete(id: number, i: number) {
    this.http.delete<number>('http://localhost:8091/ProjetCpc/Cpc/id/' + id).subscribe(
      data => {
        if(data > 0){
        this.cpcs.splice(i,1);
        console.log(data);
        } else {
          console.log(data);
        }
      }
    )
  }
}
