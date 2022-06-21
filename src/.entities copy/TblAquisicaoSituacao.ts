import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_AQUISICAO_SITUACAO", ["codSituacao"], { unique: true })
@Entity("TBL_AQUISICAO_SITUACAO")
export class TblAquisicaoSituacao {
  @Column("varchar2", { name: "TXT_SITUACAO", length: 255 })
  txtSituacao: string;

  @Column("clob", { name: "TXT_EXPLICACAO", nullable: true })
  txtExplicacao: string | null;

  @Column("number", { name: "COD_SITUACAO", scale: 0 })
  codSituacao: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;
}
