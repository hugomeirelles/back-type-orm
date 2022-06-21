import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblFormaTratamento } from "./TblFormaTratamento";

@Index("PK_TBL_PARTE", ["codParte"], { unique: true })
@Entity("TBL_PARTE")
export class TblParte {
  @Column("varchar2", { name: "TXT_PARTE", length: 255 })
  txtParte: string;

  @Column("varchar2", { name: "TXT_CNPJ_CPF", nullable: true, length: 20 })
  txtCnpjCpf: string | null;

  @Column("number", { name: "COD_PESSOA_TIPO", scale: 0, default: () => "(0)" })
  codPessoaTipo: number;

  @Column("number", { primary: true, name: "COD_PARTE", scale: 0 })
  codParte: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @ManyToOne(
    () => TblFormaTratamento,
    (tblFormaTratamento) => tblFormaTratamento.tblPartes
  )
  @JoinColumn([
    {
      name: "COD_FORMA_TRATAMENTO",
      referencedColumnName: "codFormaTratamento",
    },
  ])
  codFormaTratamento: TblFormaTratamento;
}
