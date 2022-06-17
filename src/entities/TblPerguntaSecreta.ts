import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblSegUsuarioExterno } from "./TblSegUsuarioExterno";

@Index("TBL_PERGUNTA_SECRETA_PK", ["codPerguntaSecreta"], { unique: true })
@Entity("TBL_PERGUNTA_SECRETA")
export class TblPerguntaSecreta {
  @Column("varchar2", { name: "TXT_PERGUNTA", length: 255 })
  txtPergunta: string;

  @Column("number", { primary: true, name: "COD_PERGUNTA_SECRETA", scale: 0 })
  codPerguntaSecreta: number;

  @Column("number", { name: "COD_ATIVO", scale: 0 })
  codAtivo: number;

  @OneToMany(
    () => TblSegUsuarioExterno,
    (tblSegUsuarioExterno) => tblSegUsuarioExterno.codPerguntaSecreta
  )
  tblSegUsuarioExternos: TblSegUsuarioExterno[];
}
