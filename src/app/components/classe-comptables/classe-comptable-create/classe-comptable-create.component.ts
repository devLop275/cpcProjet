import { Component, OnInit } from '@angular/core';
import { ClasseComptable } from 'src/app/controller/model/classe-comptable.model';
import { ClasseComptableService } from 'src/app/controller/service/classe-comptable.service';

@Component({
  selector: 'app-classe-comptable-create',
  templateUrl: './classe-comptable-create.component.html',
  styleUrls: ['./classe-comptable-create.component.scss']
})
export class ClasseComptableCreateComponent implements OnInit {

  constructor( private classeComptableService:ClasseComptableService  ) { }

  ngOnInit(): void {
  }

  get classeComptable(): ClasseComptable {
    return this.classeComptableService.classeComptable;
  }
  get classeComptables(): Array<ClasseComptable> {
    return this.classeComptableService.classeComptables;
  }
  public save() {
    if (this.classeComptableService.classeComptable.id != null) {
      this.classeComptableService.update();
    }
    else {
      this.classeComptableService.save();
    }
  }
}
