import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblSegGrupo } from "./TblSegGrupo";

@Index("PK_TBL_PROTOCOLO_GRUPO", ["codProtocolo", "codGrupo"], { unique: true })
@Entity("TBL_PROTOCOLO_GRUPO")
export class TblProtocoloGrupo {
  @Column("date", {
    name: "DT_INCLUSAO",
    nullable: true,
    default: () => "SYSDATE",
  })
  dtInclusao: Date | null;

  @Column("number", {
    name: "COD_USUARIO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codUsuario: number | null;

  @Column("number", { primary: true, name: "COD_PROTOCOLO", scale: 0 })
  codProtocolo: number;

  @Column("number", { primary: true, name: "COD_GRUPO", scale: 0 })
  codGrupo: number;

  @ManyToOne(() => TblSegGrupo, (tblSegGrupo) => tblSegGrupo.tblProtocoloGrupos)
  @JoinColumn([{ name: "COD_GRUPO", referencedColumnName: "codGrupo" }])
  codGrupo2: TblSegGrupo;
}
