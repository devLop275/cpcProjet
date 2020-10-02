import { Injectable } from '@angular/core';
import { OperationComptable } from '../model/operation-comptable';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationComptableService {

  private _operationComptable = new OperationComptable();
  private _operationComptables = new Array<OperationComptable>();
  private baseUrl = 'http://localhost:8090/ProjetCpc/OperationComptable/';

  constructor(private http: HttpClient) { }

  get operationComptable(): OperationComptable {
    if (this._operationComptable == null) {
      this._operationComptable = new OperationComptable();
    }
    return this._operationComptable;
  }

  set operationComptable(value: OperationComptable) {
    this._operationComptable = value;
  }

  get operationComptables(): Array<OperationComptable> {
    if (this._operationComptables == null) {
      this._operationComptables = new Array<OperationComptable>();
    }
    return this._operationComptables;
  }

  set operationComptables(value: Array<OperationComptable>) {
    this._operationComptables = value;
  }

  private clone(operationComptable: OperationComptable){
    const myClone = new OperationComptable();
    myClone.libelle = operationComptable.libelle;
    myClone.referenceSociete = operationComptable.referenceSociete;
    myClone.referenceFacture = operationComptable.referenceFacture;
    myClone.montant = operationComptable.montant;
    myClone.dateOperationComptable = operationComptable.dateOperationComptable
    myClone.dateSaisie = operationComptable.dateSaisie;
    return myClone;
  }

  public save() {
    this.http.post<OperationComptable>(this.baseUrl, this.operationComptable).subscribe(
      data => {
        if (data != null ) {
          this.operationComptables.push(this.clone(this.operationComptable));
          this.operationComptable= null;
          console.log(data);
        } else {
          console.log(data);
        }
      }
    )
  }

  public findAll() {
    this.http.get<Array<OperationComptable>>(this.baseUrl).subscribe(
      data => {
        this.operationComptables = data;
        console.log(data);
      }
    )
  }

  public delete(id: number, i: number) {
    this.http.delete<number>(this.baseUrl+'id/' + id).subscribe(
      data => {
        this.operationComptables.splice(i,1);
        console.log(data);
      }
    )
  }

  public findByCompteComptable(dateDebut:Date,dateFin:Date,code:number){
    return this.http.get<OperationComptable[]>(this.baseUrl+'rechercher/CompteComptable/dateDebut/'+ dateDebut +'/dateFin/'+ dateFin +'/code/'+ code);
  }

  public findBySousClasseComptable(dateDebut:Date,dateFin:Date,code:string){
    return this.http.get<OperationComptable[]>(this.baseUrl+'rechercher/SousClasseComptable/dateDebut/'+ dateDebut +'/dateFin/'+ dateFin +'/code/'+ code);
  }

  public getExcel(): Observable<Blob> {
    return this.http.post<Blob>(this.baseUrl + "excel/", this._operationComptables, {responseType: 'blob' as 'json'})
  }

  public getExcelTwo(operationComptables:OperationComptable[]): Observable<Blob> {
    return this.http.post<Blob>(this.baseUrl + "excel/", operationComptables, {responseType: 'blob' as 'json'})
  }


}
