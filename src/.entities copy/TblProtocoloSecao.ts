import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblProtocoloAtributo } from "./TblProtocoloAtributo";
import { TblProtocolo } from "./TblProtocolo";
import { TblSecao } from "./TblSecao";

@Index("PK_TBL_PROTOCOLO_SECAO", ["codProtocoloSecao"], { unique: true })
@Entity("TBL_PROTOCOLO_SECAO")
export class TblProtocoloSecao {
  @Column("number", { primary: true, name: "COD_PROTOCOLO_SECAO" })
  codProtocoloSecao: number;

  @Column("number", { name: "COD_ORDEM", nullable: true })
  codOrdem: number | null;

  @Column("number", { name: "COD_MULTIVALORADA", nullable: true })
  codMultivalorada: number | null;

  @OneToMany(
    () => TblProtocoloAtributo,
    (tblProtocoloAtributo) => tblProtocoloAtributo.codProtocoloSecao
  )
  tblProtocoloAtributos: TblProtocoloAtributo[];

  @ManyToOne(
    () => TblProtocolo,
    (tblProtocolo) => tblProtocolo.tblProtocoloSecaos
  )
  @JoinColumn([{ name: "COD_PROTOCOLO", referencedColumnName: "codProtocolo" }])
  codProtocolo: TblProtocolo;

  @ManyToOne(() => TblSecao, (tblSecao) => tblSecao.tblProtocoloSecaos)
  @JoinColumn([{ name: "COD_SECAO", referencedColumnName: "codSecao" }])
  codSecao: TblSecao;
}
