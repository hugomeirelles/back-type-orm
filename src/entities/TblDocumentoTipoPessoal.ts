import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblAssuntoDocTpArqPessoal } from "./TblAssuntoDocTpArqPessoal";
import { TblDocTipoPesRelacionamen } from "./TblDocTipoPesRelacionamen";
import { TblDossieDocArquivoPessoal } from "./TblDossieDocArquivoPessoal";
import { TblInteressadoDocumento } from "./TblInteressadoDocumento";

@Index("PK_TBL_DOCUMENTO_TIPO_PESSOAL", ["codDocumentoTipoPessoal"], {
  unique: true,
})
@Entity("TBL_DOCUMENTO_TIPO_PESSOAL")
export class TblDocumentoTipoPessoal {
  @Column("varchar2", { name: "TXT_DOCUMENTO_TIPO_PESSOAL", length: 100 })
  txtDocumentoTipoPessoal: string;

  @Column("varchar2", { name: "TXT_DESCRICAO", nullable: true, length: 500 })
  txtDescricao: string | null;

  @Column("number", { name: "COD_VALIDADE", scale: 0 })
  codValidade: number;

  @Column("number", { name: "COD_PRAZO_VENCIMENTO", nullable: true, scale: 0 })
  codPrazoVencimento: number | null;

  @Column("number", { name: "COD_PESSOA_DISPONIVEL", scale: 0 })
  codPessoaDisponivel: number;

  @Column("number", { name: "COD_OBRIGATORIO_PJ", nullable: true, scale: 0 })
  codObrigatorioPj: number | null;

  @Column("number", { name: "COD_OBRIGATORIO_PF", nullable: true, scale: 0 })
  codObrigatorioPf: number | null;

  @Column("number", {
    primary: true,
    name: "COD_DOCUMENTO_TIPO_PESSOAL",
    scale: 0,
  })
  codDocumentoTipoPessoal: number;

  @Column("number", { name: "COD_ATUALIZACAO", scale: 0 })
  codAtualizacao: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @Column("number", { name: "COD_ASSINADO", scale: 0 })
  codAssinado: number;

  @OneToMany(
    () => TblAssuntoDocTpArqPessoal,
    (tblAssuntoDocTpArqPessoal) =>
      tblAssuntoDocTpArqPessoal.codDocumentoTipoPessoal
  )
  tblAssuntoDocTpArqPessoals: TblAssuntoDocTpArqPessoal[];

  @OneToMany(
    () => TblDocTipoPesRelacionamen,
    (tblDocTipoPesRelacionamen) =>
      tblDocTipoPesRelacionamen.codDocumentoTipoPessoal
  )
  tblDocTipoPesRelacionamen: TblDocTipoPesRelacionamen[];

  @OneToMany(
    () => TblDossieDocArquivoPessoal,
    (tblDossieDocArquivoPessoal) =>
      tblDossieDocArquivoPessoal.codDocumentoTipoPessoal2
  )
  tblDossieDocArquivoPessoals: TblDossieDocArquivoPessoal[];

  @OneToMany(
    () => TblInteressadoDocumento,
    (tblInteressadoDocumento) => tblInteressadoDocumento.codDocumentoTipoPessoal
  )
  tblInteressadoDocumentos: TblInteressadoDocumento[];
}
