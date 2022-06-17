import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_EXPEDIR_LOTE", ["id"], { unique: true })
@Entity("TBL_EXPEDIR_LOTE")
export class TblExpedirLote {
  @Column("varchar2", { name: "VALOR", nullable: true, length: 10 })
  valor: string | null;

  @Column("varchar2", { name: "TXT_DESTINO", nullable: true, length: 50 })
  txtDestino: string | null;

  @Column("number", { name: "TIPO_REMESSA", scale: 0 })
  tipoRemessa: number;

  @Column("varchar2", { name: "PESO", nullable: true, length: 10 })
  peso: string | null;

  @Column("number", { name: "NUM_PAGINA", nullable: true, scale: 0 })
  numPagina: number | null;

  @Column("number", { primary: true, name: "ID", precision: 6, scale: 0 })
  id: number;

  @Column("date", { name: "DT_INCLUSAO", nullable: true })
  dtInclusao: Date | null;

  @Column("number", { name: "COD_USUARIO", scale: 0 })
  codUsuario: number;

  @Column("number", { name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { name: "COD_ORGAO", scale: 0 })
  codOrgao: number;

  @Column("varchar2", { name: "COD_ECT", nullable: true, length: 50 })
  codEct: string | null;
}
