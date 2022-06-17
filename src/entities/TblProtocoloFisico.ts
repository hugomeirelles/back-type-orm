import { Column, Entity, Index } from "typeorm";

@Index("IX_PF_COD_PROTOCOLO", ["codProtocolo"], {})
@Entity("TBL_PROTOCOLO_FISICO")
export class TblProtocoloFisico {
  @Column("varchar2", {
    name: "TXT_ANEXO_DESCRICAO",
    nullable: true,
    length: 255,
  })
  txtAnexoDescricao: string | null;

  @Column("date", { name: "DT_PROTOCOLO_FISICO", default: () => "sysdate" })
  dtProtocoloFisico: Date;

  @Column("number", { name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { name: "COD_NUMERO_VOLUME", nullable: true, scale: 0 })
  codNumeroVolume: number | null;

  @Column("number", { name: "COD_NUMERO_PAGINA", nullable: true, scale: 0 })
  codNumeroPagina: number | null;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @Column("number", { name: "COD_ATIVIDADE", scale: 0, default: () => "1" })
  codAtividade: number;

  @Column("number", { name: "COD_ANEXO", nullable: true, scale: 0 })
  codAnexo: number | null;
}
