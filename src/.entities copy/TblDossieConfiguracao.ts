import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
} from "typeorm";
import { TblDossieAcervoTipo } from "./TblDossieAcervoTipo";
import { TblDossieDocArquivoPessoal } from "./TblDossieDocArquivoPessoal";
import { TblEmpresa } from "./TblEmpresa";
import { TblOrgao } from "./TblOrgao";
import { TblDossieServicoDocumento } from "./TblDossieServicoDocumento";
import { TblDossieServicoProcesso } from "./TblDossieServicoProcesso";
import { TblDossieSiglaProcesso } from "./TblDossieSiglaProcesso";
import { TblDossieSituacaoDocumento } from "./TblDossieSituacaoDocumento";
import { TblDossieSituacaoProcesso } from "./TblDossieSituacaoProcesso";

@Index("PK_TBL_DOSSIE_CONFIGURACAO", ["codDossieConfiguracao"], {
  unique: true,
})
@Entity("TBL_DOSSIE_CONFIGURACAO")
export class TblDossieConfiguracao {
  @Column("varchar2", { name: "TXT_NOME", length: 150 })
  txtNome: string;

  @Column("varchar2", { name: "TXT_DESCRICAO", length: 1000 })
  txtDescricao: string;

  @Column("varchar2", {
    name: "TXT_ARQUIVO_JURIDICA",
    nullable: true,
    length: 255,
  })
  txtArquivoJuridica: string | null;

  @Column("varchar2", {
    name: "TXT_ARQUIVO_FISICA",
    nullable: true,
    length: 255,
  })
  txtArquivoFisica: string | null;

  @Column("date", { name: "DT_PRODUCAO_PROTOCOLO", nullable: true })
  dtProducaoProtocolo: Date | null;

  @Column("number", { name: "COD_TIPO_USO", nullable: true })
  codTipoUso: number | null;

  @Column("number", { name: "COD_SEPARADOR_PROCESSO", nullable: true })
  codSeparadorProcesso: number | null;

  @Column("number", { name: "COD_SEPARADOR_DOCUMENTO", nullable: true })
  codSeparadorDocumento: number | null;

  @Column("number", { name: "COD_SEPARADOR_ARQUIVO_PESSOAL", nullable: true })
  codSeparadorArquivoPessoal: number | null;

  @Column("number", { name: "COD_SEPARADOR_ACERVO", nullable: true })
  codSeparadorAcervo: number | null;

  @Column("number", { name: "COD_PROCESSO_JUNTADO", nullable: true })
  codProcessoJuntado: number | null;

  @Column("number", { name: "COD_ORDEM_PROCESSO", nullable: true })
  codOrdemProcesso: number | null;

  @Column("number", { name: "COD_ORDEM_DOCUMENTO", nullable: true })
  codOrdemDocumento: number | null;

  @Column("number", { name: "COD_ORDEM_ARQUIVO_PESSOAL", nullable: true })
  codOrdemArquivoPessoal: number | null;

  @Column("number", { name: "COD_INATIVO_ARQUIVO_PESSOAL", nullable: true })
  codInativoArquivoPessoal: number | null;

  @Column("number", { primary: true, name: "COD_DOSSIE_CONFIGURACAO" })
  codDossieConfiguracao: number;

  @Column("number", { name: "COD_DOCUMENTO_JUNTADO", nullable: true })
  codDocumentoJuntado: number | null;

  @Column("number", { name: "COD_ATIVO" })
  codAtivo: number;

  @Column("number", { name: "COD_APRESENTA_VINCULO_EMPREGAT" })
  codApresentaVinculoEmpregat: number;

  @OneToMany(
    () => TblDossieAcervoTipo,
    (tblDossieAcervoTipo) => tblDossieAcervoTipo.codDossieConfiguracao2
  )
  tblDossieAcervoTipos: TblDossieAcervoTipo[];

  @OneToMany(
    () => TblDossieDocArquivoPessoal,
    (tblDossieDocArquivoPessoal) =>
      tblDossieDocArquivoPessoal.codDossieConfiguracao2
  )
  tblDossieDocArquivoPessoals: TblDossieDocArquivoPessoal[];

  @ManyToMany(
    () => TblEmpresa,
    (tblEmpresa) => tblEmpresa.tblDossieConfiguracaos
  )
  @JoinTable({
    name: "TBL_DOSSIE_EMPRESA",
    joinColumns: [
      {
        name: "COD_DOSSIE_CONFIGURACAO",
        referencedColumnName: "codDossieConfiguracao",
      },
    ],
    inverseJoinColumns: [
      { name: "COD_EMPRESA", referencedColumnName: "codEmpresa" },
    ],
  })
  tblEmpresas: TblEmpresa[];

  @ManyToMany(() => TblOrgao, (tblOrgao) => tblOrgao.tblDossieConfiguracaos)
  @JoinTable({
    name: "TBL_DOSSIE_ORGAO",
    joinColumns: [
      {
        name: "COD_DOSSIE_CONFIGURACAO",
        referencedColumnName: "codDossieConfiguracao",
      },
    ],
    inverseJoinColumns: [
      { name: "COD_ORGAO", referencedColumnName: "codOrgao" },
    ],
  })
  tblOrgaos: TblOrgao[];

  @OneToMany(
    () => TblDossieServicoDocumento,
    (tblDossieServicoDocumento) =>
      tblDossieServicoDocumento.codDossieConfiguracao2
  )
  tblDossieServicoDocumentos: TblDossieServicoDocumento[];

  @OneToMany(
    () => TblDossieServicoProcesso,
    (tblDossieServicoProcesso) =>
      tblDossieServicoProcesso.codDossieConfiguracao2
  )
  tblDossieServicoProcessos: TblDossieServicoProcesso[];

  @OneToMany(
    () => TblDossieSiglaProcesso,
    (tblDossieSiglaProcesso) => tblDossieSiglaProcesso.codDossieConfiguracao2
  )
  tblDossieSiglaProcessos: TblDossieSiglaProcesso[];

  @OneToMany(
    () => TblDossieSituacaoDocumento,
    (tblDossieSituacaoDocumento) =>
      tblDossieSituacaoDocumento.codDossieConfiguracao2
  )
  tblDossieSituacaoDocumentos: TblDossieSituacaoDocumento[];

  @OneToMany(
    () => TblDossieSituacaoProcesso,
    (tblDossieSituacaoProcesso) =>
      tblDossieSituacaoProcesso.codDossieConfiguracao2
  )
  tblDossieSituacaoProcessos: TblDossieSituacaoProcesso[];
}
