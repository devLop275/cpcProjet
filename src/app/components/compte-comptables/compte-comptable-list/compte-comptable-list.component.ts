import { Component, OnInit } from '@angular/core';
import { CompteComptable } from 'src/app/controller/model/compte-comptable.model';
import { CompteComptableService } from 'src/app/controller/service/compte-comptable.service';

@Component({
  selector: 'app-compte-comptable-list',
  templateUrl: './compte-comptable-list.component.html',
  styleUrls: ['./compte-comptable-list.component.scss']
})
export class CompteComptableListComponent implements OnInit {

  constructor( private compteComptableService:CompteComptableService  ) { }

  ngOnInit(): void {
    this.compteComptableService.findAll();
  }
  get compteComptables(): Array<CompteComptable> {
    return this.compteComptableService.compteComptables;
  }
  public delete(numero: string, i: number) {
    this.compteComptableService.delete(numero, i);
  }

  public update(compteComptable: CompteComptable, i: number) {
    this.compteComptableService.compteComptable = this.clone(compteComptable);
  }

  private clone(compteComptable: CompteComptable) {
    const myClone = new CompteComptable();
    myClone.id = compteComptable.id;
    myClone.code = compteComptable.code;
    myClone.libelle = compteComptable.libelle;
    myClone.sousClasseComptable = compteComptable.sousClasseComptable;
    myClone.sousClasseComptable.libelle = compteComptable.sousClasseComptable.libelle;
    return myClone;
  }

}
