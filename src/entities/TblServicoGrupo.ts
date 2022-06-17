import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { TblSiglaProcesso } from "./TblSiglaProcesso";
import { TblAtividadeEconomica } from "./TblAtividadeEconomica";

@Index("PK_TBL_SERVICO_GRUPO", ["codServicoGrupo"], { unique: true })
@Entity("TBL_SERVICO_GRUPO")
export class TblServicoGrupo {
  @Column("varchar2", { name: "TXT_SIGLA", nullable: true, length: 30 })
  txtSigla: string | null;

  @Column("varchar2", { name: "TXT_SERVICO_GRUPO", length: 255 })
  txtServicoGrupo: string;

  @Column("varchar2", { name: "TXT_LOGOTIPO", nullable: true, length: 255 })
  txtLogotipo: string | null;

  @Column("number", {
    primary: true,
    name: "COD_SERVICO_GRUPO",
    precision: 10,
    scale: 0,
  })
  codServicoGrupo: number;

  @Column("number", { name: "COD_ENQUADRAMENTO" })
  codEnquadramento: number;

  @Column("number", {
    name: "COD_ATIVO",
    precision: 10,
    scale: 0,
    default: () => "1",
  })
  codAtivo: number;

  @Column("number", {
    name: "COD_ATIVIDADE_MULTIPLA",
    precision: 1,
    scale: 0,
    default: () => "0",
  })
  codAtividadeMultipla: number;

  @ManyToOne(
    () => TblSiglaProcesso,
    (tblSiglaProcesso) => tblSiglaProcesso.tblServicoGrupos
  )
  @JoinColumn([{ name: "COD_SIGLA", referencedColumnName: "codSigla" }])
  codSigla: TblSiglaProcesso;

  @ManyToMany(
    () => TblAtividadeEconomica,
    (tblAtividadeEconomica) => tblAtividadeEconomica.tblServicoGrupos
  )
  tblAtividadeEconomicas: TblAtividadeEconomica[];
}
