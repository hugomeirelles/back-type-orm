import { Column, Entity, Index } from "typeorm";

@Index("SYS_IOT_TOP_462813", ["patPart2", "patPart1"], { unique: true })
@Entity("DR$IX_TXT_RESUMO$P")
export class DrIxTxtResumoP {
  @Column("varchar2", { primary: true, name: "PAT_PART1", length: 61 })
  patPart1: string;

  @Column("varchar2", { primary: true, name: "PAT_PART2", length: 64 })
  patPart2: string;
}
