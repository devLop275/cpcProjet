import { ClasseComptable } from './classe-comptable.model';
import { CompteComptable } from './compte-comptable.model';
export class SousClasseComptable {

    public id:number;
    public numero:number;
    public libelle:String;
    public classeComptable:ClasseComptable;
    public compteComptables:CompteComptable[];

    constructor(){
        
    }

}
