import { Column, Entity } from "typeorm";

@Entity("DOCMOV")
export class Docmov {
  @Column("number", {
    name: "NUMREMSAIDA",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  numremsaida: number | null;

  @Column("number", {
    name: "NUMREMENTRADA",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  numrementrada: number | null;

  @Column("number", {
    name: "NUMDOCMOV",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  numdocmov: number | null;

  @Column("varchar2", { name: "NOMFISICO", nullable: true, length: 800 })
  nomfisico: string | null;

  @Column("varchar2", { name: "NOMDESTINATARIO", nullable: true, length: 800 })
  nomdestinatario: string | null;

  @Column("number", {
    name: "IDUNIDADE",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idunidade: number | null;

  @Column("number", {
    name: "IDTRAMITESAIDA",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idtramitesaida: number | null;

  @Column("number", {
    name: "IDTRAMITEENTRADA",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idtramiteentrada: number | null;

  @Column("number", {
    name: "IDRESPONSAVEL",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idresponsavel: number | null;

  @Column("number", {
    name: "IDPESSOAQRECEBEU",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idpessoaqrecebeu: number | null;

  @Column("number", {
    name: "IDPESSOAQCANCELOU",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idpessoaqcancelou: number | null;

  @Column("number", {
    name: "IDLOCALREMETENTE",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idlocalremetente: number | null;

  @Column("number", { name: "IDLOCALPROCED", precision: 10, scale: 0 })
  idlocalproced: number;

  @Column("number", {
    name: "IDLOCALDESTINO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idlocaldestino: number | null;

  @Column("number", {
    name: "IDDOCTO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  iddocto: number | null;

  @Column("number", { name: "IDDOCMOV", precision: 10, scale: 0 })
  iddocmov: number;

  @Column("number", {
    name: "IDDESTINATARIO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  iddestinatario: number | null;

  @Column("number", {
    name: "IDAUXMIGRACAO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idauxmigracao: number | null;

  @Column("char", { name: "FLAEMITE", nullable: true, length: 4 })
  flaemite: string | null;

  @Column("number", {
    name: "FLACANCELADO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  flacancelado: number | null;

  @Column("varchar2", { name: "DESOBS", nullable: true, length: 4000 })
  desobs: string | null;

  @Column("date", { name: "DATSAIDA", nullable: true })
  datsaida: Date | null;

  @Column("date", { name: "DATENTRADA" })
  datentrada: Date;

  @Column("date", { name: "DATATUALIZA" })
  datatualiza: Date;

  @Column("number", { name: "CODPESSOA", precision: 10, scale: 0 })
  codpessoa: number;

  @Column("char", { name: "ANOREMSAIDA", nullable: true, length: 16 })
  anoremsaida: string | null;

  @Column("char", { name: "ANOREMENTRADA", nullable: true, length: 16 })
  anorementrada: string | null;
}
