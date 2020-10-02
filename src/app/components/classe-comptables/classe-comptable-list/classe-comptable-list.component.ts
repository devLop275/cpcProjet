import { Component, OnInit } from '@angular/core';
import { ClasseComptableService } from 'src/app/controller/service/classe-comptable.service';
import { ClasseComptable } from 'src/app/controller/model/classe-comptable.model';

@Component({
  selector: 'app-classe-comptable-list',
  templateUrl: './classe-comptable-list.component.html',
  styleUrls: ['./classe-comptable-list.component.scss']
})
export class ClasseComptableListComponent implements OnInit {

  constructor( private classeComptableService:ClasseComptableService  ) { }

  ngOnInit(): void {
    this.classeComptableService.findAll();
  }
  get classeComptables(): Array<ClasseComptable> {
    return this.classeComptableService.classeComptables;
  }
  public delete(numero: number, i: number) {
    this.classeComptableService.delete(numero, i);
  }

  public update(classeComptable: ClasseComptable) {
    this.classeComptableService.classeComptable = this.clone(classeComptable);
  }

  private clone(classeComptable: ClasseComptable) {
    const myClone = new ClasseComptable();
    myClone.id = classeComptable.id;
    myClone.numero = classeComptable.numero;
    myClone.libelle = classeComptable.libelle;
    return myClone;
  }
}
