import { Column, Entity, Index, ManyToMany, OneToMany } from "typeorm";
import { TblDocTipoPesRelacionamen } from "./TblDocTipoPesRelacionamen";
import { TblInteressado } from "./TblInteressado";

@Index("PK_TBL_RELACIONAMENTO_TIPO", ["codRelacionamentoTipo"], {
  unique: true,
})
@Entity("TBL_RELACIONAMENTO_TIPO")
export class TblRelacionamentoTipo {
  @Column("varchar2", { name: "TXT_RELACIONAMENTO_TIPO", length: 255 })
  txtRelacionamentoTipo: string;

  @Column("number", {
    primary: true,
    name: "COD_RELACIONAMENTO_TIPO",
    precision: 10,
    scale: 0,
  })
  codRelacionamentoTipo: number;

  @Column("number", {
    name: "COD_DISPONIBILIZADO_PARA",
    precision: 1,
    scale: 0,
  })
  codDisponibilizadoPara: number;

  @Column("number", {
    name: "COD_ATIVO",
    precision: 10,
    scale: 0,
    default: () => "1",
  })
  codAtivo: number;

  @OneToMany(
    () => TblDocTipoPesRelacionamen,
    (tblDocTipoPesRelacionamen) =>
      tblDocTipoPesRelacionamen.codRelacionamentoTipo
  )
  tblDocTipoPesRelacionamen: TblDocTipoPesRelacionamen[];

  @ManyToMany(
    () => TblInteressado,
    (tblInteressado) => tblInteressado.tblRelacionamentoTipos
  )
  tblInteressados: TblInteressado[];
}
