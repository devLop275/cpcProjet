import { ClasseComptable } from './classe-comptable.model';
import { CpcSousClasse } from './cpc-sous-classe.model';
export class CpcClasseComptable {

    public id:number;
    public montant:number;
    public classeComptableVo:ClasseComptable;
    public cpcSousClasseVo:CpcSousClasse;

    constructor(){
        
    }

}
