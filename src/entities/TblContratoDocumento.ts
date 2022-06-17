import { Column, Entity } from "typeorm";

@Entity("TBL_CONTRATO_DOCUMENTO")
export class TblContratoDocumento {
  @Column("clob", { name: "TXT_TEXTO_INTEGRAL", nullable: true })
  txtTextoIntegral: string | null;

  @Column("varchar2", { name: "TXT_NUMERO_NOTA", nullable: true, length: 50 })
  txtNumeroNota: string | null;

  @Column("varchar2", {
    name: "TXT_NUMERO_CONTABIL",
    nullable: true,
    length: 50,
  })
  txtNumeroContabil: string | null;

  @Column("varchar2", { name: "TXT_CNPJ_CPF", nullable: true, length: 20 })
  txtCnpjCpf: string | null;

  @Column("varchar2", { name: "TXT_ARQUIVO", length: 255 })
  txtArquivo: string;

  @Column("date", { name: "DT_PAGAMENTO", nullable: true })
  dtPagamento: Date | null;

  @Column("date", { name: "DT_INCLUSAO", default: () => "SYSDATE" })
  dtInclusao: Date;

  @Column("date", { name: "DT_EMISSAO", nullable: true })
  dtEmissao: Date | null;

  @Column("number", {
    name: "COD_VALOR_NOTA",
    nullable: true,
    precision: 20,
    scale: 2,
  })
  codValorNota: number | null;

  @Column("number", { name: "COD_USUARIO", scale: 0, default: () => "1" })
  codUsuario: number;

  @Column("number", { name: "COD_ORDEM", scale: 0, default: () => "(0)" })
  codOrdem: number;

  @Column("number", { name: "COD_DOCUMENTO_TIPO", nullable: true, scale: 0 })
  codDocumentoTipo: number | null;

  @Column("number", {
    name: "COD_CONTRATO_DOCUMENTO",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  codContratoDocumento: number | null;

  @Column("number", { name: "COD_CONTRATO", scale: 0 })
  codContrato: number;
}
