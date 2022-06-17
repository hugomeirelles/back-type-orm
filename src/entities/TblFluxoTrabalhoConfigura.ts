import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblAcaoAtividade } from "./TblAcaoAtividade";
import { TblAtividadeFluxo } from "./TblAtividadeFluxo";
import { TblAtividadeFluxoHistorico } from "./TblAtividadeFluxoHistorico";
import { TblDocumentoTipo } from "./TblDocumentoTipo";
import { TblOrgao } from "./TblOrgao";
import { TblFluxoTrabalhoHistorico } from "./TblFluxoTrabalhoHistorico";
import { TblFluxoTrabObjFluxograma } from "./TblFluxoTrabObjFluxograma";

@Index("PK_FLUXO_TRABALHO_CONFIGURA", ["codFluxoTrabalho"], { unique: true })
@Entity("TBL_FLUXO_TRABALHO_CONFIGURA")
export class TblFluxoTrabalhoConfigura {
  @Column("varchar2", { name: "TXT_VERSAO_FLUXO", length: 20 })
  txtVersaoFluxo: string;

  @Column("varchar2", { name: "TXT_NOME_REDUZIDO_FLUXO", length: 50 })
  txtNomeReduzidoFluxo: string;

  @Column("varchar2", { name: "TXT_NOME_FLUXO", length: 100 })
  txtNomeFluxo: string;

  @Column("date", { name: "DT_VERSAO_FLUXO" })
  dtVersaoFluxo: Date;

  @Column("number", { name: "COD_PERMITE_SUB_FLUXO", precision: 22, scale: 0 })
  codPermiteSubFluxo: number;

  @Column("number", {
    primary: true,
    name: "COD_FLUXO_TRABALHO",
    precision: 22,
    scale: 0,
  })
  codFluxoTrabalho: number;

  @Column("number", {
    name: "COD_FLUXO_OBRIGATORIO",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codFluxoObrigatorio: number | null;

  @Column("number", { name: "COD_ATIVO", precision: 22, scale: 0 })
  codAtivo: number;

  @Column("number", {
    name: "COD_ASSUNTO",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codAssunto: number | null;

  @OneToMany(
    () => TblAcaoAtividade,
    (tblAcaoAtividade) => tblAcaoAtividade.codFluxoTrabalho
  )
  tblAcaoAtividades: TblAcaoAtividade[];

  @OneToMany(
    () => TblAcaoAtividade,
    (tblAcaoAtividade) => tblAcaoAtividade.codSubfluxo
  )
  tblAcaoAtividades2: TblAcaoAtividade[];

  @OneToMany(
    () => TblAtividadeFluxo,
    (tblAtividadeFluxo) => tblAtividadeFluxo.codFluxoTrabalho
  )
  tblAtividadeFluxos: TblAtividadeFluxo[];

  @OneToMany(
    () => TblAtividadeFluxoHistorico,
    (tblAtividadeFluxoHistorico) => tblAtividadeFluxoHistorico.codFluxoTrabalho
  )
  tblAtividadeFluxoHistoricos: TblAtividadeFluxoHistorico[];

  @ManyToOne(
    () => TblDocumentoTipo,
    (tblDocumentoTipo) => tblDocumentoTipo.tblFluxoTrabalhoConfiguras
  )
  @JoinColumn([
    { name: "COD_DOCUMENTO_TIPO", referencedColumnName: "codDocumentoTipo" },
  ])
  codDocumentoTipo: TblDocumentoTipo;

  @ManyToOne(() => TblOrgao, (tblOrgao) => tblOrgao.tblFluxoTrabalhoConfiguras)
  @JoinColumn([{ name: "COD_ORGAO", referencedColumnName: "codOrgao" }])
  codOrgao: TblOrgao;

  @OneToMany(
    () => TblFluxoTrabalhoHistorico,
    (tblFluxoTrabalhoHistorico) => tblFluxoTrabalhoHistorico.codFluxoTrabalho
  )
  tblFluxoTrabalhoHistoricos: TblFluxoTrabalhoHistorico[];

  @OneToMany(
    () => TblFluxoTrabObjFluxograma,
    (tblFluxoTrabObjFluxograma) => tblFluxoTrabObjFluxograma.codFluxoTrabalho
  )
  tblFluxoTrabObjFluxogramas: TblFluxoTrabObjFluxograma[];

  @OneToMany(
    () => TblFluxoTrabObjFluxograma,
    (tblFluxoTrabObjFluxograma) => tblFluxoTrabObjFluxograma.codSubfluxo
  )
  tblFluxoTrabObjFluxogramas2: TblFluxoTrabObjFluxograma[];
}
