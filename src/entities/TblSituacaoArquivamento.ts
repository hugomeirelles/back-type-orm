import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblProtocoloArquivo } from "./TblProtocoloArquivo";

@Index("PK_TBL_SITUACAO_ARQUIVAMENTO", ["codSituacaoArquivamento"], {
  unique: true,
})
@Entity("TBL_SITUACAO_ARQUIVAMENTO")
export class TblSituacaoArquivamento {
  @Column("varchar2", { name: "TXT_SITUACAO_ARQUIVAMENTO", length: 100 })
  txtSituacaoArquivamento: string;

  @Column("number", {
    primary: true,
    name: "COD_SITUACAO_ARQUIVAMENTO",
    precision: 10,
    scale: 0,
  })
  codSituacaoArquivamento: number;

  @Column("number", {
    name: "COD_ATIVO",
    precision: 1,
    scale: 0,
    default: () => "1",
  })
  codAtivo: number;

  @OneToMany(
    () => TblProtocoloArquivo,
    (tblProtocoloArquivo) => tblProtocoloArquivo.codSituacaoArquivamento
  )
  tblProtocoloArquivos: TblProtocoloArquivo[];
}
