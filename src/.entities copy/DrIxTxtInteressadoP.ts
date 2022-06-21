import { Column, Entity, Index } from "typeorm";

@Index("SYS_IOT_TOP_462913", ["patPart2", "patPart1"], { unique: true })
@Entity("DR$IX_TXT_INTERESSADO$P")
export class DrIxTxtInteressadoP {
  @Column("varchar2", { primary: true, name: "PAT_PART2", length: 64 })
  patPart2: string;

  @Column("varchar2", { primary: true, name: "PAT_PART1", length: 61 })
  patPart1: string;
}
