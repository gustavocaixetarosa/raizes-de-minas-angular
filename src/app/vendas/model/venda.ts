import { Cliente } from "../../clientes/model/cliente";

export enum FormaDePagamento {
  'DINHEIRO',
  'CARTAO',
  'BOLETO',
  'PIX'
}

export interface Venda {
  id: number | null,
  valorTotal: number,
  quantidadeTotal: number,
  dataVenda: Date,
  obs: string,
  formaDePagamento: FormaDePagamento,
  cliente: Cliente
}
