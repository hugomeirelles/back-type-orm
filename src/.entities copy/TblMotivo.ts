import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblFluxoTrabDistribuicao } from "./TblFluxoTrabDistribuicao";
import { TblMinutaMovimento } from "./TblMinutaMovimento";
import { TblMotivoEmpresa } from "./TblMotivoEmpresa";

@Index("PK_TBL_MOTIVO", ["codMotivo"], { unique: true })
@Entity("TBL_MOTIVO")
export class TblMotivo {
  @Column("varchar2", { name: "TXT_MOTIVO", length: 50 })
  txtMotivo: string;

  @Column("number", {
    name: "COD_UTILIZAR",
    nullable: true,
    default: () => "0",
  })
  codUtilizar: number | null;

  @Column("number", {
    name: "COD_TRAMITACAO",
    nullable: true,
    default: () => "0",
  })
  codTramitacao: number | null;

  @Column("number", {
    name: "COD_SOBRESTAMENTO",
    nullable: true,
    default: () => "0",
  })
  codSobrestamento: number | null;

  @Column("number", { primary: true, name: "COD_MOTIVO", scale: 0 })
  codMotivo: number;

  @Column("number", {
    name: "COD_DISTRIBUICAO",
    nullable: true,
    default: () => "0",
  })
  codDistribuicao: number | null;

  @Column("number", { name: "COD_CHAVE_SICNET", nullable: true, scale: 0 })
  codChaveSicnet: number | null;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @Column("number", {
    name: "COD_ARQUIVAMENTO",
    nullable: true,
    default: () => "0",
  })
  codArquivamento: number | null;

  @OneToMany(
    () => TblFluxoTrabDistribuicao,
    (tblFluxoTrabDistribuicao) => tblFluxoTrabDistribuicao.codMotivo
  )
  tblFluxoTrabDistribuicaos: TblFluxoTrabDistribuicao[];

  @OneToMany(
    () => TblMinutaMovimento,
    (tblMinutaMovimento) => tblMinutaMovimento.codMotivo
  )
  tblMinutaMovimentos: TblMinutaMovimento[];

  @OneToMany(
    () => TblMotivoEmpresa,
    (tblMotivoEmpresa) => tblMotivoEmpresa.codMotivo
  )
  tblMotivoEmpresas: TblMotivoEmpresa[];
}
