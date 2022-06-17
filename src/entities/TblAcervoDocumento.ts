import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblAcervoDocPalavraChave } from "./TblAcervoDocPalavraChave";
import { TblAcervoTipo } from "./TblAcervoTipo";
import { TblCaixa } from "./TblCaixa";
import { TblSuporteTipo } from "./TblSuporteTipo";
import { TblDocumentoTipo } from "./TblDocumentoTipo";
import { TblSegCargo } from "./TblSegCargo";
import { TblSegUsuario } from "./TblSegUsuario";
import { TblAcervoDocumentoAcesso } from "./TblAcervoDocumentoAcesso";
import { TblAcervoDocumentoAtributo } from "./TblAcervoDocumentoAtributo";
import { TblAcervoDocumentoHistorico } from "./TblAcervoDocumentoHistorico";

@Index("IX_AD_COD_CAIXA_ATIVO", ["codCaixa", "codAtivo"], {})
@Index("SYS_C00269583", ["codAcervoDocumento"], { unique: true })
@Entity("TBL_ACERVO_DOCUMENTO")
export class TblAcervoDocumento {
  @Column("varchar2", { name: "TXT_CONTEUDO", nullable: true, length: 4000 })
  txtConteudo: string | null;

  @Column("varchar2", { name: "TXT_ARQUIVO", nullable: true, length: 1000 })
  txtArquivo: string | null;

  @Column("timestamp", {
    name: "DT_INCLUSAO_T",
    scale: 6,
    default: () => "current_timestamp",
  })
  dtInclusaoT: Date;

  @Column("date", { name: "DT_INCLUSAO" })
  dtInclusao: Date;

  @Column("number", {
    name: "COD_VINCULO_TIPO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codVinculoTipo: number | null;

  @Column("number", { name: "COD_TIPO_DOCUMENTO", nullable: true })
  codTipoDocumento: number | null;

  @Column("number", {
    name: "COD_PUBLICACAO",
    precision: 1,
    scale: 0,
    default: () => "(0)",
  })
  codPublicacao: number;

  @Column("number", {
    name: "COD_GENERO",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  codGenero: number | null;

  @Column("number", {
    name: "COD_ESTADO_CONSERVACAO",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  codEstadoConservacao: number | null;

  @Column("number", { name: "COD_CLASSIFICACAO", nullable: true })
  codClassificacao: number | null;

  @Column("number", { name: "COD_CAIXA", precision: 10, scale: 0 })
  codCaixa: number;

  @Column("number", {
    name: "COD_ATIVO",
    precision: 1,
    scale: 0,
    default: () => "(1)",
  })
  codAtivo: number;

  @Column("number", {
    primary: true,
    name: "COD_ACERVO_DOCUMENTO",
    precision: 10,
    scale: 0,
  })
  codAcervoDocumento: number;

  @OneToMany(
    () => TblAcervoDocPalavraChave,
    (tblAcervoDocPalavraChave) => tblAcervoDocPalavraChave.codAcervoDocumento2
  )
  tblAcervoDocPalavraChaves: TblAcervoDocPalavraChave[];

  @ManyToOne(
    () => TblAcervoTipo,
    (tblAcervoTipo) => tblAcervoTipo.tblAcervoDocumentos
  )
  @JoinColumn([
    { name: "COD_ACERVO_TIPO", referencedColumnName: "codAcervoTipo" },
  ])
  codAcervoTipo: TblAcervoTipo;

  @ManyToOne(() => TblCaixa, (tblCaixa) => tblCaixa.tblAcervoDocumentos)
  @JoinColumn([{ name: "COD_CAIXA", referencedColumnName: "codCaixa" }])
  codCaixa2: TblCaixa;

  @ManyToOne(
    () => TblSuporteTipo,
    (tblSuporteTipo) => tblSuporteTipo.tblAcervoDocumentos
  )
  @JoinColumn([
    { name: "COD_SUPORTE_ORIGINAL", referencedColumnName: "codSuporteTipo" },
  ])
  codSuporteOriginal: TblSuporteTipo;

  @ManyToOne(
    () => TblDocumentoTipo,
    (tblDocumentoTipo) => tblDocumentoTipo.tblAcervoDocumentos
  )
  @JoinColumn([
    { name: "COD_DOCUMENTO_TIPO", referencedColumnName: "codDocumentoTipo" },
  ])
  codDocumentoTipo: TblDocumentoTipo;

  @ManyToOne(
    () => TblSegCargo,
    (tblSegCargo) => tblSegCargo.tblAcervoDocumentos
  )
  @JoinColumn([{ name: "COD_CARGO", referencedColumnName: "codCargo" }])
  codCargo: TblSegCargo;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblAcervoDocumentos
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;

  @OneToMany(
    () => TblAcervoDocumentoAcesso,
    (tblAcervoDocumentoAcesso) => tblAcervoDocumentoAcesso.codAcervoDocumento2
  )
  tblAcervoDocumentoAcessos: TblAcervoDocumentoAcesso[];

  @OneToMany(
    () => TblAcervoDocumentoAtributo,
    (tblAcervoDocumentoAtributo) =>
      tblAcervoDocumentoAtributo.codAcervoDocumento2
  )
  tblAcervoDocumentoAtributos: TblAcervoDocumentoAtributo[];

  @OneToMany(
    () => TblAcervoDocumentoHistorico,
    (tblAcervoDocumentoHistorico) =>
      tblAcervoDocumentoHistorico.codAcervoDocumento
  )
  tblAcervoDocumentoHistoricos: TblAcervoDocumentoHistorico[];
}
