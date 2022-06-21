import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblAssunto } from "./TblAssunto";

@Index("PK_TBL_ASSUNTO_PADRAO", ["codAssunto", "codVersao"], { unique: true })
@Entity("TBL_ASSUNTO_PADRAO")
export class TblAssuntoPadrao {
  @Column("clob", { name: "TXT_RESUMO_PADRAO", nullable: true })
  txtResumoPadrao: string | null;

  @Column("number", {
    name: "COD_VERSAO",
    precision: 10,
    scale: 0,
    default: () => "(1)",
  })
  codVersao: number;

  @Column("number", {
    name: "COD_PRAZO_PADRAO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codPrazoPadrao: number | null;

  @Column("number", {
    name: "COD_ORGAO_DESTINO_PADRAO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codOrgaoDestinoPadrao: number | null;

  @Column("number", {
    name: "COD_DESTINATARIO_PADRAO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codDestinatarioPadrao: number | null;

  @Column("number", { name: "COD_ASSUNTO", precision: 10, scale: 0 })
  codAssunto: number;

  @Column("number", {
    name: "COD_ACESSO_TIPO_PADRAO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codAcessoTipoPadrao: number | null;

  @ManyToOne(() => TblAssunto, (tblAssunto) => tblAssunto.tblAssuntoPadraos)
  @JoinColumn([{ name: "COD_ASSUNTO", referencedColumnName: "codAssunto" }])
  codAssunto2: TblAssunto;
}
