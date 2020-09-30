import { Component, OnInit } from '@angular/core';
import { OperationComptableService } from 'src/app/controller/service/operation-comptable.service';
import { OperationComptable } from 'src/app/controller/model/operation-comptable';

@Component({
  selector: 'app-operation-comptaable-create',
  templateUrl: './operation-comptaable-create.component.html',
  styleUrls: ['./operation-comptaable-create.component.scss']
})
export class OperationComptaableCreateComponent implements OnInit {

  constructor(private operationComptableService: OperationComptableService) { }

  ngOnInit(): void {
  }

  get operationComptable(): OperationComptable {
    return this.operationComptableService.operationComptable;
  }
  get operationComptables(): Array<OperationComptable> {
    return this.operationComptableService.operationComptables;
  }
  public save(){
    this.operationComptableService.save();
  }
}
