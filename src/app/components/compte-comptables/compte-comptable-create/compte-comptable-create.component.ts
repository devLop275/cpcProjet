import { Component, OnInit } from '@angular/core';
import { ClasseComptable } from 'src/app/controller/model/classe-comptable.model';
import { Cpc } from 'src/app/controller/model/cpc.model';
import { ClasseComptableService } from 'src/app/controller/service/classe-comptable.service';
import { CpcService } from 'src/app/controller/service/cpc.service';

@Component({
  selector: 'app-compte-comptable-create',
  templateUrl: './compte-comptable-create.component.html',
  styleUrls: ['./compte-comptable-create.component.scss']
})
export class CompteComptableCreateComponent implements OnInit {

  constructor( private classeComptableService: ClasseComptableService) { }

  ngOnInit(): void {
  }
  get classeComptable(): ClasseComptable {
    return this.classeComptableService.classeComptable;
  }
  get classeComptables(): Array<ClasseComptable> {
    return this.classeComptableService.classeComptables;
  }
  public save(){
    this.classeComptableService.save();
  }
}
