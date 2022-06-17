import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblPendenciaResposta } from "./TblPendenciaResposta";
import { TblProtocoloDocumento } from "./TblProtocoloDocumento";
import { TblPendRespArqDefiAssin } from "./TblPendRespArqDefiAssin";
import { TblPendRespArquivoAssi } from "./TblPendRespArquivoAssi";

@Index("IX_PRA_COD_PROTOCOLO_DOCUMENTO", ["codProtocoloDocumento"], {})
@Index("PK_TBL_PENDENCIA_RESPOSTA_ARQU", ["codPendenciaRespostaArquivo"], {
  unique: true,
})
@Entity("TBL_PENDENCIA_RESPOSTA_ARQUIVO")
export class TblPendenciaRespostaArquivo {
  @Column("clob", { name: "TXT_TEXTO", nullable: true })
  txtTexto: string | null;

  @Column("varchar2", { name: "TXT_HASH", length: 255 })
  txtHash: string;

  @Column("clob", { name: "TXT_ARQUIVO" })
  txtArquivo: string;

  @Column("date", { name: "DT_INCLUSAO" })
  dtInclusao: Date;

  @Column("number", { name: "COD_TAMANHO" })
  codTamanho: number;

  @Column("number", {
    name: "COD_PROTOCOLO_DOCUMENTO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codProtocoloDocumento: number | null;

  @Column("number", { primary: true, name: "COD_PENDENCIA_RESPOSTA_ARQUIVO" })
  codPendenciaRespostaArquivo: number;

  @Column("number", { name: "COD_PAGINA" })
  codPagina: number;

  @ManyToOne(
    () => TblPendenciaResposta,
    (tblPendenciaResposta) => tblPendenciaResposta.tblPendenciaRespostaArquivos
  )
  @JoinColumn([
    {
      name: "COD_PENDENCIA_RESPOSTA",
      referencedColumnName: "codPendenciaResposta",
    },
  ])
  codPendenciaResposta: TblPendenciaResposta;

  @ManyToOne(
    () => TblProtocoloDocumento,
    (tblProtocoloDocumento) =>
      tblProtocoloDocumento.tblPendenciaRespostaArquivos
  )
  @JoinColumn([
    {
      name: "COD_PROTOCOLO_DOCUMENTO",
      referencedColumnName: "codProtocoloDocumento",
    },
  ])
  codProtocoloDocumento2: TblProtocoloDocumento;

  @OneToMany(
    () => TblPendRespArqDefiAssin,
    (tblPendRespArqDefiAssin) =>
      tblPendRespArqDefiAssin.codPendenciaRespostaArquivo
  )
  tblPendRespArqDefiAssins: TblPendRespArqDefiAssin[];

  @OneToMany(
    () => TblPendRespArquivoAssi,
    (tblPendRespArquivoAssi) =>
      tblPendRespArquivoAssi.codPendenciaRespostaArquivo
  )
  tblPendRespArquivoAssis: TblPendRespArquivoAssi[];
}
