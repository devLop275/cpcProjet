import { Component, OnInit } from '@angular/core';
import { SousClasseComptableService } from 'src/app/controller/service/sous-classe-comptable.service';
import { SousClasseComptable } from 'src/app/controller/model/sous-classe-comptable.model';

@Component({
  selector: 'app-sous-classe-comptable-list',
  templateUrl: './sous-classe-comptable-list.component.html',
  styleUrls: ['./sous-classe-comptable-list.component.scss']
})
export class SousClasseComptableListComponent implements OnInit {

  constructor( private sousClasseComptableService: SousClasseComptableService ) { }

  ngOnInit(): void {
    this.sousClasseComptableService.findAll();
  }

  get sousClasseComptables(): Array<SousClasseComptable> {
    return this.sousClasseComptableService.sousClasseComptables;
  }
  public delete(id: number, i: number) {
    this.sousClasseComptableService.delete(id, i);
  }

  //public update(sousClasseComptable: SousClasseComptable, i: number) {
    //this.sousClasseComptableService.sousClasseComptable = this.sousClasseComptableService.coclone(sousClasseComptable);
 // }

  
}
