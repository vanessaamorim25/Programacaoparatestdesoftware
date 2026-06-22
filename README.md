# Trabalho de conclusão de disciplina

## Objetivo

Desenvolver uma pipeline de integração contínua utilizando GitHub Actions para um projeto com testes automatizados, contemplando:
- Execução por push.
- Execução manual.
- Execução agendada (schedule).
- Geração de relatório de testes.
- Armazenamento/publicação do relatório na pipeline.
- Criação de um README explicando a solução e os conceitos utilizados

## Tecnologias utilizadas na execução desse projeto

- Node.js
- Mocha
- Mochawesome

## Execução manual

Pode ser executada através da opção Run Workflow na aba Actions.

## Execução agendada (schedule)

Utiliza cron:

schedule:
    - cron: '37 00  * * *'


Executando diariamente às 00h 35m UTC.

## Etapas da pipeline

1. Checkout do código.
2. Configuração do Node.js.
3. Instalação das dependências.
4. Execução dos testes automatizados.
5. Geração do relatório.
6. Publicação do relatório como artifact.

# Relatório de testes

O relatório é gerado pelo Mochawesome e armazenado nos artifacts da execução.


































# Programacaoparatestdesoftware

Projeto final da disciplina de programação de teste de software da pos graduação em teste de software
Crie uma classe que possua dois métodos: um para realizar pagamento e outro para consultar o último pagamento. Pagamentos serão armazenados como objetos Javascript dentro de uma lista de pagamentos. Cada pagamento terá as propriedades: Código de Barras, Empresa e Valor. Quando um pagamento for realizado e o valor for maior que 100.00, o pagamento também terá a propriedade categoria como 'cara', caso contrário, a propriedade categoria ficará como 'padrão'. O método de consultar trará apenas o último pagamento.
  
  ex. 
  const servicoDePagamento = new ServicoDePagamento();
  servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
  console.log(servicoDePagamento.consultarUltimoPagamento());
  {
     codigoBarras: '0987-7656-3475',
     empresa: 'Samar',
     valor: 56.87,
     categoria: 'cara'
  }
  
  A entregua deve ser realizada via Github e o repositório deve ter a classe a pasta src e os testes dos métodos dessa classe dentro da pasta test usando Mocha e Node Assert.

  oi 