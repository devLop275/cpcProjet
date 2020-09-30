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
    this.http.post<OperationComptable>('http://localhost:8090/accountingProject/OperationComptable/', this.operationComptable).subscribe(
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
    this.http.get<Array<OperationComptable>>('http://localhost:8090/accountingProject/OperationComptable/').subscribe(
      data => {
        this.operationComptables = data;
        console.log(data);
      }
    )
  }

  public delete(id: number, i: number) {
    this.http.delete<number>('http://localhost:8090/accountingProject/OperationComptable/id/' + id).subscribe(
      data => {
        this.operationComptables.splice(i,1);
        console.log(data);
      }
    )
  }
   
  

  public getExcel(): Observable<Blob> {
    return this.http.post<Blob>("http://localhost:8090/accountingProject/OperationComptable/excel/", this._operationComptables, {responseType: 'blob' as 'json'})}


}
