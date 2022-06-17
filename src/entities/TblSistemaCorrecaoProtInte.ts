import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_SIST_COR_TBL_PROT_INTE", ["codProtocolo", "codInteressado"], {
  unique: true,
})
@Entity("TBL_SISTEMA_CORRECAO_PROT_INTE")
export class TblSistemaCorrecaoProtInte {
  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { primary: true, name: "COD_INTERESSADO", scale: 0 })
  codInteressado: number;
}
