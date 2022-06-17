import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblArquivo } from "./TblArquivo";
import { TblOrgao } from "./TblOrgao";

@Index("IX_AM_COD_ORGAO_DESTINO", ["codOrgaoDestino"], {})
@Index("IX_AM_COD_ORGAO_ORIGEM", ["codOrgaoOrigem"], {})
@Index("PK_ARQUIVOINVENTARIOMOVIMENTO", ["codInventario", "codMovimento"], {
  unique: true,
})
@Entity("TBL_ARQUIVO_MOVIMENTO")
export class TblArquivoMovimento {
  @Column("clob", { name: "TXT_DESPACHO", nullable: true })
  txtDespacho: string | null;

  @Column("date", { name: "DT_RECEBIMENTO", nullable: true })
  dtRecebimento: Date | null;

  @Column("date", { name: "DT_MOVIMENTO", default: () => "sysdate" })
  dtMovimento: Date;

  @Column("number", {
    name: "COD_USUARIO_RECEBIMENTO",
    nullable: true,
    scale: 0,
  })
  codUsuarioRecebimento: number | null;

  @Column("number", { name: "COD_USUARIO_MOVIMENTO", scale: 0 })
  codUsuarioMovimento: number;

  @Column("number", { name: "COD_SITUACAO", nullable: true, scale: 0 })
  codSituacao: number | null;

  @Column("number", { name: "COD_SAIDA", nullable: true, scale: 0 })
  codSaida: number | null;

  @Column("number", { name: "COD_RECEBIMENTO", scale: 0, default: () => "0" })
  codRecebimento: number;

  @Column("number", { name: "COD_PRIORIDADE", nullable: true, scale: 0 })
  codPrioridade: number | null;

  @Column("number", { name: "COD_ORGAO_ORIGEM", scale: 0 })
  codOrgaoOrigem: number;

  @Column("number", { name: "COD_ORGAO_DESTINO", scale: 0 })
  codOrgaoDestino: number;

  @Column("number", { name: "COD_MOVIMENTO", scale: 0 })
  codMovimento: number;

  @Column("number", { name: "COD_MOTIVO", nullable: true, scale: 0 })
  codMotivo: number | null;

  @Column("number", { name: "COD_INVENTARIO", scale: 0 })
  codInventario: number;

  @Column("number", { name: "COD_GUIA", scale: 0, default: () => "0" })
  codGuia: number;

  @Column("number", {
    name: "COD_GENERO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codGenero: number | null;

  @ManyToOne(() => TblArquivo, (tblArquivo) => tblArquivo.tblArquivoMovimentos)
  @JoinColumn([
    { name: "COD_INVENTARIO", referencedColumnName: "codInventario" },
  ])
  codInventario2: TblArquivo;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblArquivoMovimentos)
  @JoinColumn([{ name: "COD_ORGAO_ORIGEM", referencedColumnName: "codOrgao" }])
  codOrgaoOrigem2: TblOrgao;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblArquivoMovimentos2)
  @JoinColumn([{ name: "COD_ORGAO_DESTINO", referencedColumnName: "codOrgao" }])
  codOrgaoDestino2: TblOrgao;
}
