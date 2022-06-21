import { Column, Entity, Index, OneToMany } from "typeorm";
import { TblPendenciaExtensaoArqRes } from "./TblPendenciaExtensaoArqRes";

@Index("PK_TBL_EXTENSAO_ARQUIVO_RESP_P", ["codExtensaoArquivoRespPend"], {
  unique: true,
})
@Entity("TBL_EXTENSAO_ARQUIVO_RESP_PEND")
export class TblExtensaoArquivoRespPend {
  @Column("char", { name: "TXT_EXTENSAO", length: 4 })
  txtExtensao: string;

  @Column("number", { primary: true, name: "COD_EXTENSAO_ARQUIVO_RESP_PEND" })
  codExtensaoArquivoRespPend: number;

  @Column("number", { name: "COD_ATIVO" })
  codAtivo: number;

  @OneToMany(
    () => TblPendenciaExtensaoArqRes,
    (tblPendenciaExtensaoArqRes) =>
      tblPendenciaExtensaoArqRes.codExtensaoArquivoRespPend2
  )
  tblPendenciaExtensaoArqRes: TblPendenciaExtensaoArqRes[];
}
