import { Column, Entity } from "typeorm";

@Entity("ECT_PAIS")
export class EctPais {
  @Column("varchar2", { name: "PAI_SG_ALTERNATIVA", nullable: true, length: 3 })
  paiSgAlternativa: string | null;

  @Column("varchar2", { name: "PAI_SG", length: 2 })
  paiSg: string;

  @Column("varchar2", { name: "PAI_NO_PORTUGUES", length: 255 })
  paiNoPortugues: string;

  @Column("varchar2", { name: "PAI_NO_INGLES", nullable: true, length: 255 })
  paiNoIngles: string | null;

  @Column("varchar2", { name: "PAI_NO_FRANCES", nullable: true, length: 255 })
  paiNoFrances: string | null;

  @Column("varchar2", { name: "PAI_ABREVIATURA", nullable: true, length: 255 })
  paiAbreviatura: string | null;
}
