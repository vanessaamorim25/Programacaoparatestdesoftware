const listaDePagamentos = [];

export function pagar(codigoBarras, empresa, valor) {
  const pagamento = {
    codigoBarras,
    empresa,
    valor,
    categoria: valor > 100 ? 'cara' : 'padrão',
  };

  listaDePagamentos.push(pagamento);

  return pagamento;
}

const a = pagar('codigo', 'empresa A', 110);

//console.log(a);
//console.log(listaDePagamentos);

export function consultarUltimoPagamento() {
    return listaDePagamentos[listaDePagamentos.length - 1];
}

//console.log(listaDePagamentos);

