import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblProtocoloExpedicao } from "./TblProtocoloExpedicao";
import { TblProtocoloRemessa } from "./TblProtocoloRemessa";

@Index("PK_TBL_REMESSA_TIPO", ["codRemessaTipo"], { unique: true })
@Entity("TBL_REMESSA_TIPO")
export class TblRemessaTipo {
  @Column("varchar2", { name: "TXT_VALOR_PADRAO", nullable: true, length: 50 })
  txtValorPadrao: string | null;

  @Column("varchar2", { name: "TXT_SIGLA", nullable: true, length: 3 })
  txtSigla: string | null;

  @Column("varchar2", { name: "TXT_REMESSA_TIPO", length: 50 })
  txtRemessaTipo: string;

  @Column("varchar2", { name: "TXT_ENDERECO_WEB", nullable: true, length: 255 })
  txtEnderecoWeb: string | null;

  @Column("number", {
    name: "COD_VALOR_PESO",
    precision: 10,
    scale: 2,
    default: () => "(0)",
  })
  codValorPeso: number;

  @Column("number", { name: "COD_VALIDACAO", scale: 0, default: () => "0" })
  codValidacao: number;

  @Column("number", { primary: true, name: "COD_REMESSA_TIPO", scale: 0 })
  codRemessaTipo: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @OneToMany(
    () => TblProtocoloExpedicao,
    (tblProtocoloExpedicao) => tblProtocoloExpedicao.codRemessaTipo
  )
  tblProtocoloExpedicaos: TblProtocoloExpedicao[];

  @OneToMany(
    () => TblProtocoloRemessa,
    (tblProtocoloRemessa) => tblProtocoloRemessa.codRemessaTipo
  )
  tblProtocoloRemessas: TblProtocoloRemessa[];
}
