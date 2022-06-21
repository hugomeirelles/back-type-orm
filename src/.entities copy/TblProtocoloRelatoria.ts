import { Column, Entity, Index } from "typeorm";

@Index("PK_PROTOCOLO_RELATORIA", ["codProtocolo", "codAtivo"], { unique: true })
@Entity("TBL_PROTOCOLO_RELATORIA")
export class TblProtocoloRelatoria {
  @Column("date", { name: "DT_DISTRIBUICAO" })
  dtDistribuicao: Date;

  @Column("date", { name: "DT_DESFAZER", nullable: true })
  dtDesfazer: Date | null;

  @Column("number", { name: "COD_USUARIO_DISTRIBUIDOR", scale: 0 })
  codUsuarioDistribuidor: number;

  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { name: "COD_EVENTO", scale: 0 })
  codEvento: number;

  @Column("number", { name: "COD_DISTRIBUICAO_ATA", scale: 0 })
  codDistribuicaoAta: number;

  @Column("number", { name: "COD_DIRIGENTE", scale: 0 })
  codDirigente: number;

  @Column("number", { primary: true, name: "COD_ATIVO", scale: 0 })
  codAtivo: number;
}
