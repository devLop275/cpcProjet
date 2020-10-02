import { Component, OnInit } from '@angular/core';
import { SousClasseComptableService } from 'src/app/controller/service/sous-classe-comptable.service';
import { SousClasseComptable } from 'src/app/controller/model/sous-classe-comptable.model';

@Component({
  selector: 'app-sous-classe-comptable-list',
  templateUrl: './sous-classe-comptable-list.component.html',
  styleUrls: ['./sous-classe-comptable-list.component.scss']
})
export class SousClasseComptableListComponent implements OnInit {

  constructor(private sousClasseComptableService: SousClasseComptableService) { }

  ngOnInit(): void {
    this.sousClasseComptableService.findAll();
  }

  get sousClasseComptables(): Array<SousClasseComptable> {
    return this.sousClasseComptableService.sousClasseComptables;
  }
  public delete(id: number, i: number) {
    this.sousClasseComptableService.delete(id, i);
  }

  public update(sousClasseComptable: SousClasseComptable) {
    this.sousClasseComptableService.sousClasseComptable = this.clone(sousClasseComptable);
  }

  private clone(sousClasseComptable: SousClasseComptable) {
    const myClone = new SousClasseComptable();
    myClone.id = sousClasseComptable.id;
    myClone.numero = sousClasseComptable.numero;
    myClone.libelle = sousClasseComptable.libelle;
    myClone.classeComptable = sousClasseComptable.classeComptable;
    myClone.classeComptable.libelle = sousClasseComptable.classeComptable.libelle;
    return myClone;
  }


}
