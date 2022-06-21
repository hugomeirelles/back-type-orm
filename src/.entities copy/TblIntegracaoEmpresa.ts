import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_INTEGRACAO_EMPRESA", ["codIntegracaoEmpresa"], { unique: true })
@Entity("TBL_INTEGRACAO_EMPRESA")
export class TblIntegracaoEmpresa {
  @Column("varchar2", { name: "TXT_SERVICO", nullable: true, length: 255 })
  txtServico: string | null;

  @Column("varchar2", { name: "TXT_INTEGRACAO_EMPRESA", length: 255 })
  txtIntegracaoEmpresa: string;

  @Column("number", {
    primary: true,
    name: "COD_INTEGRACAO_EMPRESA",
    precision: 10,
    scale: 0,
  })
  codIntegracaoEmpresa: number;
}
