import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblInteressadoDocAssinatura } from "./TblInteressadoDocAssinatura";
import { TblInteressado } from "./TblInteressado";
import { TblDocumentoTipoPessoal } from "./TblDocumentoTipoPessoal";
import { TblProtocoloDocumento } from "./TblProtocoloDocumento";

@Index("PK_INTERESSADO_DOCUMENTO", ["codInteressadoDocumento"], {
  unique: true,
})
@Entity("TBL_INTERESSADO_DOCUMENTO")
export class TblInteressadoDocumento {
  @Column("clob", { name: "TXT_TEXTO", nullable: true })
  txtTexto: string | null;

  @Column("varchar2", { name: "TXT_HASH", length: 128 })
  txtHash: string;

  @Column("varchar2", {
    name: "TXT_DESCRICAO_ARQUIVO",
    nullable: true,
    length: 255,
  })
  txtDescricaoArquivo: string | null;

  @Column("varchar2", { name: "TXT_ARQUIVO", length: 255 })
  txtArquivo: string;

  @Column("date", { name: "DT_VALIDADE", nullable: true })
  dtValidade: Date | null;

  @Column("date", { name: "DT_INCLUSAO" })
  dtInclusao: Date;

  @Column("date", { name: "DT_INATIVA", nullable: true })
  dtInativa: Date | null;

  @Column("date", { name: "DT_DOCUMENTO", nullable: true })
  dtDocumento: Date | null;

  @Column("number", { name: "COD_TAMANHO", nullable: true })
  codTamanho: number | null;

  @Column("number", { name: "COD_SUBSTITUIR", nullable: true })
  codSubstituir: number | null;

  @Column("number", { name: "COD_PAGINA", nullable: true })
  codPagina: number | null;

  @Column("number", { primary: true, name: "COD_INTERESSADO_DOCUMENTO" })
  codInteressadoDocumento: number;

  @Column("number", { name: "COD_ATIVO", default: () => "(1)" })
  codAtivo: number;

  @OneToMany(
    () => TblInteressadoDocAssinatura,
    (tblInteressadoDocAssinatura) =>
      tblInteressadoDocAssinatura.codInteressadoDocumento
  )
  tblInteressadoDocAssinaturas: TblInteressadoDocAssinatura[];

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblInteressadoDocumentos,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([
    { name: "COD_INTERESSADO", referencedColumnName: "codInteressado" },
  ])
  codInteressado: TblInteressado;

  @ManyToOne(
    () => TblDocumentoTipoPessoal,
    (tblDocumentoTipoPessoal) =>
      tblDocumentoTipoPessoal.tblInteressadoDocumentos
  )
  @JoinColumn([
    {
      name: "COD_DOCUMENTO_TIPO_PESSOAL",
      referencedColumnName: "codDocumentoTipoPessoal",
    },
  ])
  codDocumentoTipoPessoal: TblDocumentoTipoPessoal;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblInteressadoDocumentos2
  )
  @JoinColumn([
    {
      name: "COD_INTERESSADO_INCLUSAO",
      referencedColumnName: "codInteressado",
    },
  ])
  codInteressadoInclusao: TblInteressado;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblInteressadoDocumentos3
  )
  @JoinColumn([
    { name: "COD_INTERESSADO_INATIVA", referencedColumnName: "codInteressado" },
  ])
  codInteressadoInativa: TblInteressado;

  @OneToMany(
    () => TblProtocoloDocumento,
    (tblProtocoloDocumento) => tblProtocoloDocumento.codInteressadoDocumento
  )
  tblProtocoloDocumentos: TblProtocoloDocumento[];
}
