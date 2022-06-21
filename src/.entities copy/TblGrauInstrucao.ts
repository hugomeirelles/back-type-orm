import { Column, Entity, Index } from "typeorm";

@Index("SYS_C00269582", ["codGrauInstrucao"], { unique: true })
@Entity("TBL_GRAU_INSTRUCAO")
export class TblGrauInstrucao {
  @Column("varchar2", { name: "TXT_GRAU_INSTRUCAO", length: 255 })
  txtGrauInstrucao: string;

  @Column("number", { primary: true, name: "COD_GRAU_INSTRUCAO", scale: 0 })
  codGrauInstrucao: number;

  @Column("number", { name: "COD_ATIVO", scale: 0 })
  codAtivo: number;
}
