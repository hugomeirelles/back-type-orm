import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_PROTOCOLO_VOLUME", ["codProtocolo", "codVolume"], {
  unique: true,
})
@Entity("TBL_PROTOCOLO_VOLUME")
export class TblProtocoloVolume {
  @Column("date", { name: "DT_ENCERRAMENTO", nullable: true })
  dtEncerramento: Date | null;

  @Column("date", { name: "DT_ABERTURA", default: () => "sysdate" })
  dtAbertura: Date;

  @Column("number", { primary: true, name: "COD_VOLUME", scale: 0 })
  codVolume: number;

  @Column("number", {
    name: "COD_USUARIO_ENCERRAMENTO",
    nullable: true,
    scale: 0,
  })
  codUsuarioEncerramento: number | null;

  @Column("number", { name: "COD_USUARIO_ABERTURA", scale: 0 })
  codUsuarioAbertura: number;

  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", {
    name: "COD_NUMERO_PAGINA_INICIAL",
    scale: 0,
    default: () => "(1)",
  })
  codNumeroPaginaInicial: number;

  @Column("number", { name: "COD_NUMERO_PAGINA", scale: 0 })
  codNumeroPagina: number;
}
