import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_UNIDADE_ARQUIVAMENTO", ["codUnidadeArquivamento"], {
  unique: true,
})
@Entity("TBL_UNIDADE_ARQUIVAMENTO")
export class TblUnidadeArquivamento {
  @Column("varchar2", { name: "TXT_UNIDADE_ARQUIVAMENTO", length: 255 })
  txtUnidadeArquivamento: string;

  @Column("number", {
    primary: true,
    name: "COD_UNIDADE_ARQUIVAMENTO",
    scale: 0,
  })
  codUnidadeArquivamento: number;

  @Column("number", {
    name: "COD_ULTIMO_NUMERO_EXTERNO",
    scale: 0,
    default: () => "(0)",
  })
  codUltimoNumeroExterno: number;

  @Column("number", {
    name: "COD_ULTIMO_NUMERO",
    scale: 0,
    default: () => "(0)",
  })
  codUltimoNumero: number;

  @Column("number", { name: "COD_ORGAO", nullable: true, scale: 0 })
  codOrgao: number | null;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;
}
