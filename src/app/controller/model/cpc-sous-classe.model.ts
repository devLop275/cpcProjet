
import { SousClasseComptable } from './sous-classe-comptable.model';
import { CpcClasseComptable } from './cpc-classe-comptable.model';
import { Cpc } from './cpc.model';
export class CpcSousClasse {

    public id:number;
    public montant:number;
    public cpc:Cpc;
   

    constructor(){
        
    }
}
/*
private Long id;
	//montant est la somme des montants des operations pour une SousClasseComptable
	@Column(precision = 16, scale = 4)
	private BigDecimal montant;
	@ManyToOne
	private Cpc cpc;
	@ManyToOne
	private SousClasseComptable sousClasseComptable;
	@OneToMany(mappedBy = "cpcSousClasse")
    private List<CpcClasseComptable> cpcClasseComptables;
    */