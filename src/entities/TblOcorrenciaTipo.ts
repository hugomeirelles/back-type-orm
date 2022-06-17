import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_OCORRENCIA_TIPO", ["codOcorrenciaTipo"], { unique: true })
@Entity("TBL_OCORRENCIA_TIPO")
export class TblOcorrenciaTipo {
  @Column("varchar2", {
    name: "TXT_OCORRENCIA_TIPO",
    nullable: true,
    length: 255,
  })
  txtOcorrenciaTipo: string | null;

  @Column("number", {
    primary: true,
    name: "COD_OCORRENCIA_TIPO",
    precision: 10,
    scale: 0,
  })
  codOcorrenciaTipo: number;

  @Column("number", {
    name: "COD_ATIVO",
    precision: 10,
    scale: 0,
    default: () => "(1)",
  })
  codAtivo: number;
}
