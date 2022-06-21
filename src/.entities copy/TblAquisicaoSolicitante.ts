import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_AQUISICAO_SOLICITANTE", ["codAquisicao", "codSolicitante"], {
  unique: true,
})
@Entity("TBL_AQUISICAO_SOLICITANTE")
export class TblAquisicaoSolicitante {
  @Column("number", { primary: true, name: "COD_SOLICITANTE", scale: 0 })
  codSolicitante: number;

  @Column("number", { primary: true, name: "COD_AQUISICAO", scale: 0 })
  codAquisicao: number;
}
