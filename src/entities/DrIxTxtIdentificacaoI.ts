import { Column, Entity, Index } from "typeorm";

@Index(
  "DR$IX_TXT_IDENTIFICACAO$X",
  ["tokenText", "tokenType", "tokenFirst", "tokenLast", "tokenCount"],
  {}
)
@Entity("DR$IX_TXT_IDENTIFICACAO$I")
export class DrIxTxtIdentificacaoI {
  @Column("varchar2", { name: "TOKEN_TEXT", length: 64 })
  tokenText: string;

  @Column("number", { name: "TOKEN_COUNT", precision: 10, scale: 0 })
  tokenCount: number;

  @Column("blob", { name: "TOKEN_INFO", nullable: true })
  tokenInfo: Buffer | null;

  @Column("number", { name: "TOKEN_LAST", precision: 10, scale: 0 })
  tokenLast: number;

  @Column("number", { name: "TOKEN_FIRST", precision: 10, scale: 0 })
  tokenFirst: number;

  @Column("number", { name: "TOKEN_TYPE", precision: 10, scale: 0 })
  tokenType: number;
}
