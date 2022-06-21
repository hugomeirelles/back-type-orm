import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblAcaoAtividade } from "./TblAcaoAtividade";
import { TblFluxoTrabalhoAcao } from "./TblFluxoTrabalhoAcao";

@Index("PK_ACAO", ["codAcao"], { unique: true })
@Entity("TBL_ACAO")
export class TblAcao {
  @Column("varchar2", {
    name: "TXT_NOME_ACAO_RESUMIDO",
    nullable: true,
    length: 100,
  })
  txtNomeAcaoResumido: string | null;

  @Column("varchar2", { name: "TXT_NOME_ACAO", length: 100 })
  txtNomeAcao: string;

  @Column("number", {
    name: "COD_ORDEM",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codOrdem: number | null;

  @Column("number", {
    name: "COD_ATIVO",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  codAtivo: number | null;

  @Column("number", {
    primary: true,
    name: "COD_ACAO",
    precision: 22,
    scale: 0,
  })
  codAcao: number;

  @OneToMany(
    () => TblAcaoAtividade,
    (tblAcaoAtividade) => tblAcaoAtividade.codAcao
  )
  tblAcaoAtividades: TblAcaoAtividade[];

  @OneToMany(
    () => TblFluxoTrabalhoAcao,
    (tblFluxoTrabalhoAcao) => tblFluxoTrabalhoAcao.codAcao
  )
  tblFluxoTrabalhoAcaos: TblFluxoTrabalhoAcao[];
}
