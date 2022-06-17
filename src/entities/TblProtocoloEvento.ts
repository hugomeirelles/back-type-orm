import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_PROTOCOLO_EVENTO", ["codProtocolo", "codEvento"], {
  unique: true,
})
@Entity("TBL_PROTOCOLO_EVENTO")
export class TblProtocoloEvento {
  @Column("varchar2", { name: "TXT_EVENTO", length: 255 })
  txtEvento: string;

  @Column("clob", { name: "TXT_DETALHAMENTO", nullable: true })
  txtDetalhamento: string | null;

  @Column("date", { name: "DT_INFORMACAO", default: () => "sysdate" })
  dtInformacao: Date;

  @Column("date", { name: "DT_EVENTO" })
  dtEvento: Date;

  @Column("number", { name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { name: "COD_EVENTO", scale: 0, default: () => "0" })
  codEvento: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;
}
