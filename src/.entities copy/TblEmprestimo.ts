import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblArquivoCentral } from "./TblArquivoCentral";
import { TblEmprestimoSituacao } from "./TblEmprestimoSituacao";
import { TblSegUsuario } from "./TblSegUsuario";
import { TblArquivo } from "./TblArquivo";
import { TblEmprestimoArquivoDigital } from "./TblEmprestimoArquivoDigital";
import { TblEmprestimoComentario } from "./TblEmprestimoComentario";
import { TblEmprestimoDevolucao } from "./TblEmprestimoDevolucao";
import { TblEmprestimoProrrogacao } from "./TblEmprestimoProrrogacao";
import { TblEmprestimoProtocolo } from "./TblEmprestimoProtocolo";
import { TblEmprestimoRegistroAvulso } from "./TblEmprestimoRegistroAvulso";

@Index("PK_TBL_EMPRESTIMO", ["codEmprestimo"], { unique: true })
@Entity("TBL_EMPRESTIMO")
export class TblEmprestimo {
  @Column("clob", { name: "TXT_OBSERVACAO", nullable: true })
  txtObservacao: string | null;

  @Column("clob", { name: "TXT_MOTIVO", nullable: true })
  txtMotivo: string | null;

  @Column("varchar2", {
    name: "TXT_LOCALIZACAO_FISICA",
    nullable: true,
    length: 255,
  })
  txtLocalizacaoFisica: string | null;

  @Column("varchar2", {
    name: "TXT_ARQUIVO_DIGITAL_PEDIDO",
    nullable: true,
    length: 255,
  })
  txtArquivoDigitalPedido: string | null;

  @Column("varchar2", {
    name: "TXT_ARQUIVO_DIGITAL",
    nullable: true,
    length: 255,
  })
  txtArquivoDigital: string | null;

  @Column("clob", { name: "TXT_ADICIONAL", nullable: true })
  txtAdicional: string | null;

  @Column("date", { name: "DT_EMPRESTIMO", default: () => "sysdate" })
  dtEmprestimo: Date;

  @Column("date", { name: "DT_CONCLUSAO", nullable: true })
  dtConclusao: Date | null;

  @Column("date", { name: "DT_ATENDIMENTO", default: () => "sysdate" })
  dtAtendimento: Date;

  @Column("number", {
    name: "COD_RETIRADA_DEFINITIVA",
    scale: 0,
    default: () => "(0)",
  })
  codRetiradaDefinitiva: number;

  @Column("number", { name: "COD_PRAZO", scale: 0, default: () => "(0)" })
  codPrazo: number;

  @Column("number", { name: "COD_ORIGINAL", scale: 0, default: () => "(0)" })
  codOriginal: number;

  @Column("number", { name: "COD_ORGAO_ARQUIVO", nullable: true, scale: 0 })
  codOrgaoArquivo: number | null;

  @Column("number", { name: "COD_ORGAO", scale: 0, default: () => "(1)" })
  codOrgao: number;

  @Column("number", { name: "COD_NUMERO", scale: 0 })
  codNumero: number;

  @Column("number", { primary: true, name: "COD_EMPRESTIMO", scale: 0 })
  codEmprestimo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @Column("number", { name: "COD_ATENDIMENTO", nullable: true, scale: 0 })
  codAtendimento: number | null;

  @Column("number", { name: "COD_ANO", scale: 0 })
  codAno: number;

  @ManyToOne(
    () => TblArquivoCentral,
    (tblArquivoCentral) => tblArquivoCentral.tblEmprestimos
  )
  @JoinColumn([
    { name: "COD_ARQUIVO_CENTRAL", referencedColumnName: "codArquivoCentral" },
  ])
  codArquivoCentral: TblArquivoCentral;

  @ManyToOne(
    () => TblEmprestimoSituacao,
    (tblEmprestimoSituacao) => tblEmprestimoSituacao.tblEmprestimos
  )
  @JoinColumn([{ name: "COD_SITUACAO", referencedColumnName: "codSituacao" }])
  codSituacao: TblEmprestimoSituacao;

  @ManyToOne(
    () => TblSegUsuario,
    (tblSegUsuario) => tblSegUsuario.tblEmprestimos
  )
  @JoinColumn([{ name: "COD_USUARIO", referencedColumnName: "codUsuario" }])
  codUsuario: TblSegUsuario;

  @ManyToMany(() => TblArquivo, (tblArquivo) => tblArquivo.tblEmprestimos)
  @JoinTable({
    name: "TBL_EMPRESTIMO_ARQUIVO",
    joinColumns: [
      { name: "COD_EMPRESTIMO", referencedColumnName: "codEmprestimo" },
    ],
    inverseJoinColumns: [
      { name: "COD_INVENTARIO", referencedColumnName: "codInventario" },
    ],
  })
  tblArquivos: TblArquivo[];

  @OneToMany(
    () => TblEmprestimoArquivoDigital,
    (tblEmprestimoArquivoDigital) => tblEmprestimoArquivoDigital.codEmprestimo2
  )
  tblEmprestimoArquivoDigitals: TblEmprestimoArquivoDigital[];

  @OneToMany(
    () => TblEmprestimoComentario,
    (tblEmprestimoComentario) => tblEmprestimoComentario.codEmprestimo2
  )
  tblEmprestimoComentarios: TblEmprestimoComentario[];

  @OneToMany(
    () => TblEmprestimoDevolucao,
    (tblEmprestimoDevolucao) => tblEmprestimoDevolucao.codEmprestimo
  )
  tblEmprestimoDevolucaos: TblEmprestimoDevolucao[];

  @OneToMany(
    () => TblEmprestimoProrrogacao,
    (tblEmprestimoProrrogacao) => tblEmprestimoProrrogacao.codEmprestimo2
  )
  tblEmprestimoProrrogacaos: TblEmprestimoProrrogacao[];

  @OneToMany(
    () => TblEmprestimoProtocolo,
    (tblEmprestimoProtocolo) => tblEmprestimoProtocolo.codEmprestimo2
  )
  tblEmprestimoProtocolos: TblEmprestimoProtocolo[];

  @OneToMany(
    () => TblEmprestimoRegistroAvulso,
    (tblEmprestimoRegistroAvulso) => tblEmprestimoRegistroAvulso.codEmprestimo2
  )
  tblEmprestimoRegistroAvulsos: TblEmprestimoRegistroAvulso[];
}
