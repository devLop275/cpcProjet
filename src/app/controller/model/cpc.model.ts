import { CpcSousClasse } from './cpc-sous-classe.model';
export class Cpc {

    public id:number;
    public dateDebut:Date;
    public dateFin:Date;
    public montant:number;
    public referenceSociete:String;
    public totalCharge:number;
    public totalProduit:number;
    public resultat:number;
    public cpcSousClassesVo:CpcSousClasse[];
    constructor(){

    }
}
 /*private Long id;
	private Date dateDebut;
	private Date dateFin;
	@Column(precision = 16, scale = 4)
	private BigDecimal montant;
	private String referenceSociete;
    @Column(precision = 16, scale = 4)
    private BigDecimal totalCharge;
    @Column(precision = 16, scale = 4)
    private BigDecimal totalProduit;
    @Column(precision = 16, scale = 4)
    private BigDecimal resultat;
	@OneToMany(mappedBy = "cpc")
	private List<CpcSousClasse> cpcSousClasses;*/