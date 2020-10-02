import { Component, OnInit } from '@angular/core';
import { SousClasseComptableService } from 'src/app/controller/service/sous-classe-comptable.service';
import { SousClasseComptable } from 'src/app/controller/model/sous-classe-comptable.model';
import { ClasseComptable } from '../../../controller/model/classe-comptable.model';
import { ClasseComptableService } from '../../../controller/service/classe-comptable.service';

@Component({
  selector: 'app-sous-classe-comptable-create',
  templateUrl: './sous-classe-comptable-create.component.html',
  styleUrls: ['./sous-classe-comptable-create.component.scss']
})
export class SousClasseComptableCreateComponent implements OnInit {

  classeComptable:ClasseComptable;
  classeComptables:ClasseComptable[];

  constructor( private sousClasseComptableService: SousClasseComptableService , private classeComptableService:ClasseComptableService) { }

  ngOnInit(): void {
    this.getAllClasseComptables();
  }

  public getAllClasseComptables(){
    this.classeComptableService.getAll().subscribe(
      data=>{
        this.classeComptables = data;
      },
      error=>{
        console.log(error);
      }
    )
  }

  get sousClasseComptable(): SousClasseComptable {
    return this.sousClasseComptableService.sousClasseComptable;
  }
  get sousClasseComptables(): Array<SousClasseComptable> {
    return this.sousClasseComptableService.sousClasseComptables;
  }
  public save() {
    if (this.sousClasseComptableService.sousClasseComptable.id != null) {
      this.sousClasseComptableService.update();
    }
    else {
      this.sousClasseComptableService.save();
    }
  }

}
