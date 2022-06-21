import { Column, Entity, Index } from "typeorm";

@Index("PK_TBL_CONTRATO_INTERVENIENTE", ["codContrato", "codInterveniente"], {
  unique: true,
})
@Entity("TBL_CONTRATO_INTERVENIENTE")
export class TblContratoInterveniente {
  @Column("number", { primary: true, name: "COD_INTERVENIENTE", scale: 0 })
  codInterveniente: number;

  @Column("number", { primary: true, name: "COD_CONTRATO", scale: 0 })
  codContrato: number;
}
