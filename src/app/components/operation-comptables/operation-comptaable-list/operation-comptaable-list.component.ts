import { Component, OnInit } from '@angular/core';
import { OperationComptableService } from 'src/app/controller/service/operation-comptable.service';
import { OperationComptable } from 'src/app/controller/model/operation-comptable';
import { saveAs } from 'file-saver';
import * as FileSaver from 'file-saver';
 
@Component({
  selector: 'app-operation-comptaable-list',
  templateUrl: './operation-comptaable-list.component.html',
  styleUrls: ['./operation-comptaable-list.component.scss']
})
export class OperationComptaableListComponent implements OnInit {

  constructor( private operationComptableService : OperationComptableService ) { }

  ngOnInit(): void {
    this.operationComptableService.findAll();
  }
  get operationComptables(): Array<OperationComptable>{
    return this.operationComptableService.operationComptables;
  }
  
  public delete(id: number, i: number){
    this.operationComptableService.delete(id,i);
  }
  
  public exportExcel() {
    this.operationComptableService.getExcel().toPromise().then(
      value => {
        this.saveAsExcelFile(value, "test");
      }
    )
  }

  public saveAsExcelFile(blob: Blob, fileName: string): void {
   // import("file-saver").then(FileSaver => {
    // import("file-saver").then(FileSaver =>{
      FileSaver.saveAs(blob, fileName + '_export_' + new Date().getTime() + '.xlsx');
  }
}
