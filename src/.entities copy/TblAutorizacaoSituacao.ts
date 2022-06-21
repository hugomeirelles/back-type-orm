import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblAutorizacao } from "./TblAutorizacao";

@Index("PK_TBL_AUTORIZACAO_SITUACAO", ["codAutorizacaoSituacao"], {
  unique: true,
})
@Entity("TBL_AUTORIZACAO_SITUACAO")
export class TblAutorizacaoSituacao {
  @Column("varchar2", { name: "TXT_AUTORIZACAO_SITUACAO", length: 100 })
  txtAutorizacaoSituacao: string;

  @Column("number", { primary: true, name: "COD_AUTORIZACAO_SITUACAO" })
  codAutorizacaoSituacao: number;

  @Column("number", { name: "COD_ATIVO" })
  codAtivo: number;

  @OneToMany(
    () => TblAutorizacao,
    (tblAutorizacao) => tblAutorizacao.codAutorizacaoSituacao
  )
  tblAutorizacaos: TblAutorizacao[];
}
