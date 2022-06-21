import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_TBL_ARQUIVO_PROT_HIST",
  ["codInventarioOrigem", "codInventarioDestino", "codProtocolo", "dtOperacao"],
  { unique: true }
)
@Entity("TBL_ARQUIVO_PROTOCOLO_HISTOR")
export class TblArquivoProtocoloHistor {
  @Column("date", {
    primary: true,
    name: "DT_OPERACAO",
    default: () => "sysdate",
  })
  dtOperacao: Date;

  @Column("number", { name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { primary: true, name: "COD_INVENTARIO_ORIGEM", scale: 0 })
  codInventarioOrigem: number;

  @Column("number", { primary: true, name: "COD_INVENTARIO_DESTINO", scale: 0 })
  codInventarioDestino: number;
}
