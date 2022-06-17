import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_SIS_PROT_INTERE_END", ["codProtocolo", "codInteressado"], {
  unique: true,
})
@Entity("TBL_SISTEMA_PROTOCOLO_INTE_END")
export class TblSistemaProtocoloInteEnd {
  @Column("varchar2", { name: "TXT_TELEFONE", nullable: true, length: 30 })
  txtTelefone: string | null;

  @Column("varchar2", { name: "TXT_SITE", nullable: true, length: 100 })
  txtSite: string | null;

  @Column("varchar2", { name: "TXT_RESPONSAVEL", nullable: true, length: 255 })
  txtResponsavel: string | null;

  @Column("varchar2", { name: "TXT_ORGAO", nullable: true, length: 255 })
  txtOrgao: string | null;

  @Column("varchar2", {
    name: "TXT_FORMA_TRATAMENTO",
    nullable: true,
    length: 100,
  })
  txtFormaTratamento: string | null;

  @Column("varchar2", { name: "TXT_FAX", nullable: true, length: 30 })
  txtFax: string | null;

  @Column("varchar2", { name: "TXT_ENDERECO", nullable: true, length: 255 })
  txtEndereco: string | null;

  @Column("varchar2", { name: "TXT_EMAIL", nullable: true, length: 100 })
  txtEmail: string | null;

  @Column("varchar2", { name: "TXT_CNPJ_CPF", nullable: true, length: 20 })
  txtCnpjCpf: string | null;

  @Column("varchar2", { name: "TXT_CIDADE", nullable: true, length: 255 })
  txtCidade: string | null;

  @Column("varchar2", { name: "TXT_CEP", nullable: true, length: 10 })
  txtCep: string | null;

  @Column("varchar2", { name: "TXT_CARGO", nullable: true, length: 100 })
  txtCargo: string | null;

  @Column("varchar2", {
    name: "TXT_CADASTRO_UNICO",
    nullable: true,
    length: 50,
  })
  txtCadastroUnico: string | null;

  @Column("varchar2", { name: "TXT_BAIRRO", nullable: true, length: 255 })
  txtBairro: string | null;

  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { name: "COD_POPULACAO", nullable: true, scale: 0 })
  codPopulacao: number | null;

  @Column("number", { name: "COD_PESSOA_TIPO", scale: 0, default: () => "0" })
  codPessoaTipo: number;

  @Column("number", { name: "COD_PAIS", scale: 0, default: () => "0" })
  codPais: number;

  @Column("number", { name: "COD_ORGAO_TIPO", nullable: true, scale: 0 })
  codOrgaoTipo: number | null;

  @Column("number", { name: "COD_INTERNO", scale: 0, default: () => "1" })
  codInterno: number;

  @Column("number", { primary: true, name: "COD_INTERESSADO", scale: 0 })
  codInteressado: number;

  @Column("number", { name: "COD_ESTADO", nullable: true, scale: 0 })
  codEstado: number | null;

  @Column("number", { name: "COD_ESFERA", nullable: true, scale: 0 })
  codEsfera: number | null;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;
}
