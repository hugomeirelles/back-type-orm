import { Column, Entity, Index, ManyToMany, OneToMany } from "typeorm";
import { TblDossieConfiguracao } from "./TblDossieConfiguracao";
import { TblInteressadoVinculoEmpre } from "./TblInteressadoVinculoEmpre";
import { TblMotivoEmpresa } from "./TblMotivoEmpresa";
import { TblSegUsuario } from "./TblSegUsuario";

@Index("PK_TBL_EMPRESA", ["codEmpresa"], { unique: true })
@Entity("TBL_EMPRESA")
export class TblEmpresa {
  @Column("varchar2", { name: "TXT_SIGLA", nullable: true, length: 20 })
  txtSigla: string | null;

  @Column("varchar2", {
    name: "TXT_PROTOCOLO_PROCESSO",
    nullable: true,
    length: 20,
  })
  txtProtocoloProcesso: string | null;

  @Column("varchar2", {
    name: "TXT_PROTOCOLO_DOCUMENTO",
    nullable: true,
    length: 20,
  })
  txtProtocoloDocumento: string | null;

  @Column("varchar2", { name: "TXT_PROTOCOLO", nullable: true, length: 20 })
  txtProtocolo: string | null;

  @Column("varchar2", {
    name: "TXT_ORGAO_PROTOCOLO_DOCUMENTO",
    nullable: true,
    length: 20,
  })
  txtOrgaoProtocoloDocumento: string | null;

  @Column("varchar2", {
    name: "TXT_ORGAO_PROTOCOLO",
    nullable: true,
    length: 20,
  })
  txtOrgaoProtocolo: string | null;

  @Column("varchar2", { name: "TXT_ORGAO", nullable: true, length: 20 })
  txtOrgao: string | null;

  @Column("varchar2", { name: "TXT_LOGOTIPO", nullable: true, length: 255 })
  txtLogotipo: string | null;

  @Column("varchar2", { name: "TXT_EMPRESA", length: 255 })
  txtEmpresa: string;

  @Column("number", {
    name: "COD_EMPRESA_SUPERIOR",
    nullable: true,
    scale: 0,
    default: () => "(1)",
  })
  codEmpresaSuperior: number | null;

  @Column("number", {
    name: "COD_EMPRESA_CIVICO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codEmpresaCivico: number | null;

  @Column("number", { primary: true, name: "COD_EMPRESA", scale: 0 })
  codEmpresa: number;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "(1)" })
  codAtivo: number;

  @ManyToMany(
    () => TblDossieConfiguracao,
    (tblDossieConfiguracao) => tblDossieConfiguracao.tblEmpresas
  )
  tblDossieConfiguracaos: TblDossieConfiguracao[];

  @OneToMany(
    () => TblInteressadoVinculoEmpre,
    (tblInteressadoVinculoEmpre) => tblInteressadoVinculoEmpre.codEmpresa
  )
  tblInteressadoVinculoEmpres: TblInteressadoVinculoEmpre[];

  @OneToMany(
    () => TblMotivoEmpresa,
    (tblMotivoEmpresa) => tblMotivoEmpresa.codEmpresa
  )
  tblMotivoEmpresas: TblMotivoEmpresa[];

  @OneToMany(() => TblSegUsuario, (tblSegUsuario) => tblSegUsuario.codEmpresa)
  tblSegUsuarios: TblSegUsuario[];
}
