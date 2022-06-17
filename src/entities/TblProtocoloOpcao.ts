import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblProtocolo } from "./TblProtocolo";

@Index("PK_TBL_PROTOCOLO_OPCAO", ["codProtocoloOpcao"], { unique: true })
@Entity("TBL_PROTOCOLO_OPCAO")
export class TblProtocoloOpcao {
  @Column("number", {
    name: "COD_PERMISSAO",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  codPermissao: number | null;

  @Column("number", { name: "COD_ATIVO", scale: 0, default: () => "1" })
  codAtivo: number;

  @Column("number", { name: "COD_CADASTRO", scale: 0, default: () => "0" })
  codCadastro: number;

  @Column("number", { name: "COD_ORDEM", scale: 0, default: () => "0" })
  codOrdem: number;

  @Column("varchar2", { name: "TXT_PROTOCOLO_OPCAO", length: 255 })
  txtProtocoloOpcao: string;

  @Column("number", { primary: true, name: "COD_PROTOCOLO_OPCAO", scale: 0 })
  codProtocoloOpcao: number;

  @OneToMany(
    () => TblProtocolo,
    (tblProtocolo) => tblProtocolo.codProtocoloOpcao
  )
  tblProtocolos: TblProtocolo[];
}
