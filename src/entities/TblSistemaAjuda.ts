import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_SISTEMA_AJUDA", ["codAjuda"], { unique: true })
@Entity("TBL_SISTEMA_AJUDA")
export class TblSistemaAjuda {
  @Column("varchar2", { name: "TXT_TITULO", length: 255 })
  txtTitulo: string;

  @Column("varchar2", { name: "TXT_INDEXACAO", length: 50 })
  txtIndexacao: string;

  @Column("clob", { name: "TXT_FUNCAO", nullable: true })
  txtFuncao: string | null;

  @Column("clob", { name: "TXT_AJUDA", nullable: true })
  txtAjuda: string | null;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @Column("number", { name: "COD_AJUDA", scale: 0 })
  codAjuda: number;
}
