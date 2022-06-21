import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_JUDICIAL_CLASSE", ["codJudicialClasse"], { unique: true })
@Entity("TBL_JUDICIAL_CLASSE")
export class TblJudicialClasse {
  @Column("varchar2", { name: "TXT_SIGLA_ANTIGA", nullable: true, length: 20 })
  txtSiglaAntiga: string | null;

  @Column("varchar2", { name: "TXT_SIGLA", length: 20 })
  txtSigla: string;

  @Column("varchar2", { name: "TXT_POLO_PASSIVO", length: 30 })
  txtPoloPassivo: string;

  @Column("varchar2", { name: "TXT_POLO_ATIVO", length: 30 })
  txtPoloAtivo: string;

  @Column("char", {
    name: "TXT_NUMERACAO_PROPRIA",
    length: 1,
    default: () => "'s'",
  })
  txtNumeracaoPropria: string;

  @Column("varchar2", { name: "TXT_NATUREZA", nullable: true, length: 100 })
  txtNatureza: string | null;

  @Column("clob", { name: "TXT_GLOSSARIO", nullable: true })
  txtGlossario: string | null;

  @Column("varchar2", {
    name: "TXT_DISPOSITIVO_LEGAL",
    nullable: true,
    length: 250,
  })
  txtDispositivoLegal: string | null;

  @Column("varchar2", { name: "TXT_ARTI", nullable: true, length: 250 })
  txtArti: string | null;

  @Column("number", { primary: true, name: "COD_JUDICIAL_CLASSE", scale: 0 })
  codJudicialClasse: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;
}
