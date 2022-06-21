import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { TblDocumentoTipoPessoal } from "./TblDocumentoTipoPessoal";
import { TblRelacionamentoTipo } from "./TblRelacionamentoTipo";
import { TblSegCargo } from "./TblSegCargo";

@Index("PK_TBL_DOC_TIPO_PES_RELACIONA", ["codDocTipoPesRelacionamen"], {
  unique: true,
})
@Entity("TBL_DOC_TIPO_PES_RELACIONAMEN")
export class TblDocTipoPesRelacionamen {
  @Column("number", { name: "COD_OBRIGATORIO", scale: 0 })
  codObrigatorio: number;

  @Column("number", {
    primary: true,
    name: "COD_DOC_TIPO_PES_RELACIONAMEN",
    scale: 0,
  })
  codDocTipoPesRelacionamen: number;

  @ManyToOne(
    () => TblDocumentoTipoPessoal,
    (tblDocumentoTipoPessoal) =>
      tblDocumentoTipoPessoal.tblDocTipoPesRelacionamen,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([
    {
      name: "COD_DOCUMENTO_TIPO_PESSOAL",
      referencedColumnName: "codDocumentoTipoPessoal",
    },
  ])
  codDocumentoTipoPessoal: TblDocumentoTipoPessoal;

  @ManyToOne(
    () => TblRelacionamentoTipo,
    (tblRelacionamentoTipo) => tblRelacionamentoTipo.tblDocTipoPesRelacionamen
  )
  @JoinColumn([
    {
      name: "COD_RELACIONAMENTO_TIPO",
      referencedColumnName: "codRelacionamentoTipo",
    },
  ])
  codRelacionamentoTipo: TblRelacionamentoTipo;

  @ManyToMany(
    () => TblSegCargo,
    (tblSegCargo) => tblSegCargo.tblDocTipoPesRelacionamen
  )
  @JoinTable({
    name: "TBL_DOC_TIPO_PESSOAL_CARGO",
    joinColumns: [
      {
        name: "COD_DOC_TIPO_PES_RELACIONAMEN",
        referencedColumnName: "codDocTipoPesRelacionamen",
      },
    ],
    inverseJoinColumns: [
      { name: "COD_CARGO", referencedColumnName: "codCargo" },
    ],
  })
  tblSegCargos: TblSegCargo[];
}
