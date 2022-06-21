import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_SISTEMA_DICIONARIO", ["txtTabela", "txtCampo"], { unique: true })
@Entity("TBL_SISTEMA_DICIONARIO")
export class TblSistemaDicionario {
  @Column("varchar2", { primary: true, name: "TXT_TABELA", length: 50 })
  txtTabela: string;

  @Column("varchar2", { name: "TXT_EXPLICACAO", nullable: true, length: 200 })
  txtExplicacao: string | null;

  @Column("varchar2", { name: "TXT_DESCRICAO", nullable: true, length: 200 })
  txtDescricao: string | null;

  @Column("varchar2", { primary: true, name: "TXT_CAMPO", length: 50 })
  txtCampo: string;

  @Column("number", { name: "COD_TAMANHO", nullable: true, scale: 0 })
  codTamanho: number | null;

  @Column("number", { name: "COD_ORDEM", nullable: true, scale: 0 })
  codOrdem: number | null;
}
