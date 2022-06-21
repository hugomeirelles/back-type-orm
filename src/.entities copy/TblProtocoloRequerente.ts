import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblProtocolo } from "./TblProtocolo";
import { TblSegUsuarioExterno } from "./TblSegUsuarioExterno";

@Index("TBL_REQUERENTE_PK", ["codRequerente"], { unique: true })
@Entity("TBL_PROTOCOLO_REQUERENTE")
export class TblProtocoloRequerente {
  @Column("varchar2", { name: "TXT_UF", nullable: true, length: 20 })
  txtUf: string | null;

  @Column("varchar2", {
    name: "TXT_TIPO_ENDERECO",
    nullable: true,
    length: 255,
  })
  txtTipoEndereco: string | null;

  @Column("varchar2", { name: "TXT_TELEFONE", length: 20 })
  txtTelefone: string;

  @Column("varchar2", { name: "TXT_REQUERENTE", length: 255 })
  txtRequerente: string;

  @Column("varchar2", {
    name: "TXT_REPRESENTANTE_LEGAL_CARGO",
    nullable: true,
    length: 255,
  })
  txtRepresentanteLegalCargo: string | null;

  @Column("varchar2", {
    name: "TXT_REPRESENTANTE_LEGAL",
    nullable: true,
    length: 255,
  })
  txtRepresentanteLegal: string | null;

  @Column("varchar2", {
    name: "TXT_PONTO_REFERENCIA",
    nullable: true,
    length: 255,
  })
  txtPontoReferencia: string | null;

  @Column("varchar2", { name: "TXT_NUMERO", nullable: true, length: 255 })
  txtNumero: string | null;

  @Column("varchar2", {
    name: "TXT_MATRICULA_IPTU",
    nullable: true,
    length: 50,
  })
  txtMatriculaIptu: string | null;

  @Column("varchar2", {
    name: "TXT_INSCRICAO_MUNICIPAL",
    nullable: true,
    length: 50,
  })
  txtInscricaoMunicipal: string | null;

  @Column("varchar2", { name: "TXT_ENDERECO", length: 255 })
  txtEndereco: string;

  @Column("varchar2", { name: "TXT_EMAIL", length: 255 })
  txtEmail: string;

  @Column("varchar2", { name: "TXT_COMPLEMENTO2", nullable: true, length: 255 })
  txtComplemento2: string | null;

  @Column("varchar2", { name: "TXT_COMPLEMENTO", nullable: true, length: 255 })
  txtComplemento: string | null;

  @Column("varchar2", { name: "TXT_CNPJ_CPF", length: 18 })
  txtCnpjCpf: string;

  @Column("varchar2", { name: "TXT_CIDADE", length: 255 })
  txtCidade: string;

  @Column("varchar2", { name: "TXT_CEP", length: 9 })
  txtCep: string;

  @Column("varchar2", { name: "TXT_BAIRRO", length: 255 })
  txtBairro: string;

  @Column("date", { name: "DT_CADASTRO", default: () => "SYSDATE" })
  dtCadastro: Date;

  @Column("number", { primary: true, name: "COD_REQUERENTE" })
  codRequerente: number;

  @Column("number", { name: "COD_ATIVO" })
  codAtivo: number;

  @ManyToOne(
    () => TblProtocolo,
    (tblProtocolo) => tblProtocolo.tblProtocoloRequerentes
  )
  @JoinColumn([{ name: "COD_PROTOCOLO", referencedColumnName: "codProtocolo" }])
  codProtocolo: TblProtocolo;

  @ManyToOne(
    () => TblSegUsuarioExterno,
    (tblSegUsuarioExterno) => tblSegUsuarioExterno.tblProtocoloRequerentes
  )
  @JoinColumn([
    { name: "COD_USUARIO_EXTERNO", referencedColumnName: "codUsuarioExterno" },
  ])
  codUsuarioExterno: TblSegUsuarioExterno;
}
