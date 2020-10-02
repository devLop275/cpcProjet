import { Component, OnInit } from '@angular/core';
import { CompteComptable } from 'src/app/controller/model/compte-comptable.model';
import { CompteComptableService } from 'src/app/controller/service/compte-comptable.service';
import { SousClasseComptable } from '../../../controller/model/sous-classe-comptable.model';
import { SousClasseComptableService } from '../../../controller/service/sous-classe-comptable.service';

@Component({
  selector: 'app-compte-comptable-create',
  templateUrl: './compte-comptable-create.component.html',
  styleUrls: ['./compte-comptable-create.component.scss']
})
export class CompteComptableCreateComponent implements OnInit {

  sousClasseComptable:SousClasseComptable;
  sousClasseComptables:SousClasseComptable[];

  constructor( private compteComptableService:CompteComptableService,private sousClasseComptableService: SousClasseComptableService  ) { }

  ngOnInit(): void {
    this.getAllSousClasseComptables();
  }

  public getAllSousClasseComptables(){
    this.sousClasseComptableService.getAll().subscribe(
      data=>{
        this.sousClasseComptables = data;
      },
      error=>{
        console.log(error);
      }
    )
  }

  get compteComptable(): CompteComptable {
    return this.compteComptableService.compteComptable;
  }
  set compteComptable(value:CompteComptable){
    this.compteComptableService.compteComptable=value;
  }
  get compteComptables(): Array<CompteComptable> {
    return this.compteComptableService.compteComptables;
  }
  public save() {
    if (this.compteComptableService.compteComptable.id != null) {
      this.compteComptableService.update();
    }
    else {
      this.compteComptableService.save();
    }
  }
  
}
