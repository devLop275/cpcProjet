import { Injectable } from '@angular/core';
import { ClasseComptable } from '../model/classe-comptable.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClasseComptableService {

  private baseUrl = 'http://localhost:8090/accountingProject/ClasseComptable';
  private _classeComptable = new ClasseComptable();
  private _classeComptables = Array<ClasseComptable>();

  constructor(private http: HttpClient) { }

  public save(){
    this.http.post<number>(this.baseUrl + '/', this.classeComptable).subscribe(data => {
      if (data > 0) {
        this.classeComptables.push(this.classeComptable);
        this._classeComptable = null;
      } else {
        console.log('Erreur de enregistrement :' + data);
      }
    });
  }

  public findAll() {
    this.http.get<Array<ClasseComptable>>(this.baseUrl + '/').subscribe(data => {
      this.classeComptables = data;
    });
  }

  public delete(numero: string, i: number) {
    if (confirm('Voulez-vous vraimenet faire?')) {
      this.http.delete<number>(this.baseUrl + '/numero/' + numero).subscribe(data => {
        if (data > 0) {
          this.classeComptables.splice(i, data);
        }
      });
    }
  }

  get classeComptable(): ClasseComptable {
    if (this._classeComptable == null ) {
      this._classeComptable = new ClasseComptable();
    }
    return this._classeComptable;
  }

  set classeComptable(value: ClasseComptable) {
    this._classeComptable = value;
  }


  get classeComptables(): Array<ClasseComptable> {
    if (this._classeComptables == null) {
      this._classeComptables = new Array<ClasseComptable>();
    }
    return this._classeComptables;
  }

  set classeComptables(value: Array<ClasseComptable>) {
    this._classeComptables = value;
  }
}
