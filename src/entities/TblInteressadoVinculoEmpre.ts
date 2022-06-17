import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblAcervoDocumentoPessoa } from "./TblAcervoDocumentoPessoa";
import { TblEmpresa } from "./TblEmpresa";
import { TblInteressado } from "./TblInteressado";
import { TblProtocoloInteressado } from "./TblProtocoloInteressado";

@Index("PK_TBL_INTERESSADO_VINCULO_EMP", ["codInteressadoVinculoEmpre"], {
  unique: true,
})
@Entity("TBL_INTERESSADO_VINCULO_EMPRE")
export class TblInteressadoVinculoEmpre {
  @Column("varchar2", { name: "TXT_MATRICULA", length: 50 })
  txtMatricula: string;

  @Column("varchar2", {
    name: "TXT_HORARIO_TRABALHO",
    nullable: true,
    length: 100,
  })
  txtHorarioTrabalho: string | null;

  @Column("varchar2", {
    name: "TXT_DIARIO_OFICIAL",
    nullable: true,
    length: 100,
  })
  txtDiarioOficial: string | null;

  @Column("varchar2", { name: "TXT_DECRETO", nullable: true, length: 100 })
  txtDecreto: string | null;

  @Column("varchar2", {
    name: "TXT_CARGA_HORARIA",
    nullable: true,
    length: 100,
  })
  txtCargaHoraria: string | null;

  @Column("date", { name: "DT_POSSE", nullable: true })
  dtPosse: Date | null;

  @Column("date", { name: "DT_DESLIGAMENTO", nullable: true })
  dtDesligamento: Date | null;

  @Column("number", { name: "COD_TIPO_VINCULO_EMPREGO", nullable: true })
  codTipoVinculoEmprego: number | null;

  @Column("number", { name: "COD_SITUACAO_EMPREGO", nullable: true })
  codSituacaoEmprego: number | null;

  @Column("varchar2", {
    name: "COD_REGISTRO_FIORILLI",
    nullable: true,
    length: 50,
  })
  codRegistroFiorilli: string | null;

  @Column("number", { name: "COD_ORGAO", nullable: true })
  codOrgao: number | null;

  @Column("number", { primary: true, name: "COD_INTERESSADO_VINCULO_EMPRE" })
  codInteressadoVinculoEmpre: number;

  @Column("number", { name: "COD_CLASSE_CARGO_PADRAO", nullable: true })
  codClasseCargoPadrao: number | null;

  @Column("number", { name: "COD_CARGO", nullable: true })
  codCargo: number | null;

  @Column("number", {
    name: "COD_ATIVO",
    precision: 1,
    scale: 0,
    default: () => "1",
  })
  codAtivo: number;

  @OneToMany(
    () => TblAcervoDocumentoPessoa,
    (tblAcervoDocumentoPessoa) =>
      tblAcervoDocumentoPessoa.codInteressadoVinculoEmpre
  )
  tblAcervoDocumentoPessoas: TblAcervoDocumentoPessoa[];

  @ManyToOne(
    () => TblEmpresa,
    (tblEmpresa) => tblEmpresa.tblInteressadoVinculoEmpres
  )
  @JoinColumn([{ name: "COD_EMPRESA", referencedColumnName: "codEmpresa" }])
  codEmpresa: TblEmpresa;

  @ManyToOne(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblInteressadoVinculoEmpres
  )
  @JoinColumn([
    { name: "COD_INTERESSADO", referencedColumnName: "codInteressado" },
  ])
  codInteressado: TblInteressado;

  @OneToMany(
    () => TblProtocoloInteressado,
    (tblProtocoloInteressado) =>
      tblProtocoloInteressado.codInteressadoVinculoEmpre
  )
  tblProtocoloInteressados: TblProtocoloInteressado[];
}
