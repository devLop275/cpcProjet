import { Component, OnInit } from '@angular/core';
import { SousClasseComptableService } from 'src/app/controller/service/sous-classe-comptable.service';
import { SousClasseComptable } from 'src/app/controller/model/sous-classe-comptable.model';

@Component({
  selector: 'app-sous-classe-comptable-create',
  templateUrl: './sous-classe-comptable-create.component.html',
  styleUrls: ['./sous-classe-comptable-create.component.scss']
})
export class SousClasseComptableCreateComponent implements OnInit {

  constructor( private sousClasseComptableService: SousClasseComptableService ) { }

  ngOnInit(): void {
  }

  get classeComptable(): SousClasseComptable {
    return this.sousClasseComptableService.sousClasseComptable;
  }
  get classeComptables(): Array<SousClasseComptable> {
    return this.sousClasseComptableService.sousClasseComptables;
  }
  public save(){
    this.sousClasseComptableService.save();
  }

}
