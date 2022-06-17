import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblDossieSiglaProcesso } from "./TblDossieSiglaProcesso";
import { TblServicoGrupo } from "./TblServicoGrupo";

@Index("TBL_SIGLA_PK", ["codSigla"], { unique: true })
@Entity("TBL_SIGLA_PROCESSO")
export class TblSiglaProcesso {
  @Column("varchar2", { name: "TXT_SIGLA", length: 20 })
  txtSigla: string;

  @Column("varchar2", { name: "TXT_DESCRICAO", length: 200 })
  txtDescricao: string;

  @Column("number", { primary: true, name: "COD_SIGLA" })
  codSigla: number;

  @Column("number", { name: "COD_ATIVO", default: () => "'1'" })
  codAtivo: number;

  @OneToMany(
    () => TblDossieSiglaProcesso,
    (tblDossieSiglaProcesso) => tblDossieSiglaProcesso.codSigla2
  )
  tblDossieSiglaProcessos: TblDossieSiglaProcesso[];

  @OneToMany(
    () => TblServicoGrupo,
    (tblServicoGrupo) => tblServicoGrupo.codSigla
  )
  tblServicoGrupos: TblServicoGrupo[];
}
