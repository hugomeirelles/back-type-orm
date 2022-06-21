import { Column, Entity, Index, JoinTable, ManyToMany } from "typeorm";
import { TblArquivo } from "./TblArquivo";

@Index("PK_TBL_LISTAGEM_ELIMINACAO", ["codListagem"], { unique: true })
@Entity("TBL_LISTAGEM_ELIMINACAO")
export class TblListagemEliminacao {
  @Column("varchar2", { name: "TXT_LISTAGEM", length: 255 })
  txtListagem: string;

  @Column("date", { name: "DT_INCLUSAO", default: () => "sysdate" })
  dtInclusao: Date;

  @Column("date", { name: "DT_FECHAMENTO", nullable: true })
  dtFechamento: Date | null;

  @Column("date", { name: "DT_ENVIO_ARQUIVO_NACIONAL", nullable: true })
  dtEnvioArquivoNacional: Date | null;

  @Column("date", { name: "DT_ELIMINACAO", nullable: true })
  dtEliminacao: Date | null;

  @Column("date", { name: "DT_APROVACAO_ARQUIVO_NACIONAL", nullable: true })
  dtAprovacaoArquivoNacional: Date | null;

  @Column("number", {
    name: "COD_SUPORTE_TIPO",
    scale: 0,
    default: () => "(0)",
  })
  codSuporteTipo: number;

  @Column("number", { name: "COD_SITUACAO", scale: 0, default: () => "(1)" })
  codSituacao: number;

  @Column("number", { name: "COD_ORGAO", scale: 0, default: () => "(0)" })
  codOrgao: number;

  @Column("number", { name: "COD_NUMERO", scale: 0, default: () => "(0)" })
  codNumero: number;

  @Column("number", { primary: true, name: "COD_LISTAGEM", scale: 0 })
  codListagem: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @ManyToMany(
    () => TblArquivo,
    (tblArquivo) => tblArquivo.tblListagemEliminacaos
  )
  @JoinTable({
    name: "TBL_LISTAGEM_ELIMINACAO_ARQUIV",
    joinColumns: [
      { name: "COD_LISTAGEM", referencedColumnName: "codListagem" },
    ],
    inverseJoinColumns: [
      { name: "COD_INVENTARIO", referencedColumnName: "codInventario" },
    ],
  })
  tblArquivos: TblArquivo[];
}
