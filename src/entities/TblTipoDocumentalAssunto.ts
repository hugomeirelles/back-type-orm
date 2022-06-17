import { Column, Entity, Index } from "typeorm";

@Index("PK_TIPO_DOC_ASSUNTO", ["codTipoDocumental", "codAssunto"], {
  unique: true,
})
@Entity("TBL_TIPO_DOCUMENTAL_ASSUNTO")
export class TblTipoDocumentalAssunto {
  @Column("number", {
    primary: true,
    name: "COD_TIPO_DOCUMENTAL",
    precision: 10,
    scale: 0,
  })
  codTipoDocumental: number;

  @Column("number", {
    primary: true,
    name: "COD_ASSUNTO",
    precision: 10,
    scale: 0,
  })
  codAssunto: number;
}
