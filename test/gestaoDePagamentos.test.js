import {pagar, consultarUltimoPagamento} from '../src/gestaoDePagamentos.js'
import assert from 'node:assert';

describe ('Testes de gestao de Pagamentos',function(){
    it('Validar que o pagamento recebe a categoria cara quando o valor é  1100', function () {

    // Arrange
    const categoriaEsperada = 'cara';

    // Act
    const pagamentoRetornado = pagar(
        'Codigo01',
        'empresa 01',
        1100
    );

    // Assert
    assert.equal(pagamentoRetornado.categoria,categoriaEsperada);

    });

    it('Validar que o pagamento recebe a categoria padrao quando o valor do pagamento eh 80', function () {

    // Arrange
    const categoriaEsperada = 'padrão';

    // Act
    const pagamentoRetornado = pagar(
        'Codigo02',
        'empresa 02',
        80
    );

    // Assert
    assert.equal(pagamentoRetornado.categoria,categoriaEsperada);

    });
    it('Deve retornar o último pagamento realizado', function () {

        // Arrange
        pagar('Codigo03', 'Empresa 3', 200);

        // Act
        const ultimoPagamento = consultarUltimoPagamento();

        // Assert
        assert.deepEqual(
            ultimoPagamento,
            {
                codigoBarras: 'Codigo03',
                empresa: 'Empresa 3',
                valor: 200,
                categoria: 'cara'
            }
        );

    });

});
    

