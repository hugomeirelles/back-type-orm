import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblContratoExecucaoDoc } from "./TblContratoExecucaoDoc";
import { TblContratoExecucaoImposto } from "./TblContratoExecucaoImposto";
import { TblContratoExecucaoNf } from "./TblContratoExecucaoNf";
import { TblContratoExecucaoNl } from "./TblContratoExecucaoNl";
import { TblContratoExecucaoOb } from "./TblContratoExecucaoOb";
import { TblContratoExecucaoPd } from "./TblContratoExecucaoPd";

@Index("PK_TBL_CONTRATO_EXECUCAO", ["codContrato", "codExecucao"], {
  unique: true,
})
@Entity("TBL_CONTRATO_EXECUCAO")
export class TblContratoExecucao {
  @Column("varchar2", {
    name: "TXT_PROTOCOLO_MEDICAO",
    nullable: true,
    length: 15,
  })
  txtProtocoloMedicao: string | null;

  @Column("varchar2", {
    name: "TXT_NUMERO_PROTOCOLO",
    nullable: true,
    length: 15,
  })
  txtNumeroProtocolo: string | null;

  @Column("varchar2", { name: "TXT_NOTA_FISCAL", nullable: true, length: 30 })
  txtNotaFiscal: string | null;

  @Column("varchar2", {
    name: "TXT_ARQUIVO_SIAFI",
    nullable: true,
    length: 255,
  })
  txtArquivoSiafi: string | null;

  @Column("varchar2", { name: "TXT_ARQUIVO", nullable: true, length: 255 })
  txtArquivo: string | null;

  @Column("date", { name: "DT_NOTA_FISCAL", nullable: true })
  dtNotaFiscal: Date | null;

  @Column("number", {
    name: "COD_VALOR_NOTA_FISCAL",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  codValorNotaFiscal: number | null;

  @Column("number", {
    name: "COD_ORIGEM_RECURSO",
    scale: 0,
    default: () => "(0)",
  })
  codOrigemRecurso: number;

  @Column("number", { primary: true, name: "COD_EXECUCAO", scale: 0 })
  codExecucao: number;

  @Column("number", { name: "COD_CRONOGRAMA", scale: 0 })
  codCronograma: number;

  @Column("number", { primary: true, name: "COD_CONTRATO", scale: 0 })
  codContrato: number;

  @OneToMany(
    () => TblContratoExecucaoDoc,
    (tblContratoExecucaoDoc) => tblContratoExecucaoDoc.tblContratoExecucao
  )
  tblContratoExecucaoDocs: TblContratoExecucaoDoc[];

  @OneToMany(
    () => TblContratoExecucaoImposto,
    (tblContratoExecucaoImposto) =>
      tblContratoExecucaoImposto.tblContratoExecucao
  )
  tblContratoExecucaoImpostos: TblContratoExecucaoImposto[];

  @OneToMany(
    () => TblContratoExecucaoNf,
    (tblContratoExecucaoNf) => tblContratoExecucaoNf.tblContratoExecucao
  )
  tblContratoExecucaoNfs: TblContratoExecucaoNf[];

  @OneToMany(
    () => TblContratoExecucaoNl,
    (tblContratoExecucaoNl) => tblContratoExecucaoNl.tblContratoExecucao
  )
  tblContratoExecucaoNls: TblContratoExecucaoNl[];

  @OneToMany(
    () => TblContratoExecucaoOb,
    (tblContratoExecucaoOb) => tblContratoExecucaoOb.tblContratoExecucao
  )
  tblContratoExecucaoObs: TblContratoExecucaoOb[];

  @OneToMany(
    () => TblContratoExecucaoPd,
    (tblContratoExecucaoPd) => tblContratoExecucaoPd.tblContratoExecucao
  )
  tblContratoExecucaoPds: TblContratoExecucaoPd[];
}
