import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TblAtributo } from "./TblAtributo";
import { TblProtocolo } from "./TblProtocolo";
import { TblProtocoloSecao } from "./TblProtocoloSecao";

@Index("PK_TBL_PROTOCOLO_ATRIBUTO", ["codProtocoloAtributo"], { unique: true })
@Entity("TBL_PROTOCOLO_ATRIBUTO")
export class TblProtocoloAtributo {
  @Column("varchar2", { name: "TXT_VALOR", length: 4000 })
  txtValor: string;

  @Column("number", {
    name: "COD_UNICO_LINHA",
    nullable: true,
    default: () => "0",
  })
  codUnicoLinha: number | null;

  @Column("number", { primary: true, name: "COD_PROTOCOLO_ATRIBUTO" })
  codProtocoloAtributo: number;

  @Column("number", { name: "COD_ORDEM", nullable: true, scale: 0 })
  codOrdem: number | null;

  @Column("number", { name: "COD_OBRIGATORIO" })
  codObrigatorio: number;

  @Column("number", { name: "COD_LINHA_SECAO", nullable: true })
  codLinhaSecao: number | null;

  @ManyToOne(
    () => TblAtributo,
    (tblAtributo) => tblAtributo.tblProtocoloAtributos
  )
  @JoinColumn([{ name: "COD_ATRIBUTO", referencedColumnName: "codAtributo" }])
  codAtributo: TblAtributo;

  @ManyToOne(
    () => TblProtocolo,
    (tblProtocolo) => tblProtocolo.tblProtocoloAtributos
  )
  @JoinColumn([{ name: "COD_PROTOCOLO", referencedColumnName: "codProtocolo" }])
  codProtocolo: TblProtocolo;

  @ManyToOne(
    () => TblProtocoloSecao,
    (tblProtocoloSecao) => tblProtocoloSecao.tblProtocoloAtributos
  )
  @JoinColumn([
    { name: "COD_PROTOCOLO_SECAO", referencedColumnName: "codProtocoloSecao" },
  ])
  codProtocoloSecao: TblProtocoloSecao;
}
