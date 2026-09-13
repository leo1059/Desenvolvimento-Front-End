const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const nome = "Leonardo Lermen";
const agencia = "1234";
const conta = "56789-0";

let saldo = 1000;

function menu() {
    console.log("\n===== CAIXA ELETRÔNICO =====");
    console.log("1 - Consultar dados da conta");
    console.log("2 - Consultar saldo");
    console.log("3 - Realizar débito");
    console.log("4 - Realizar crédito");
    console.log("0 - Sair");
    console.log("============================");

    rl.question("Escolha uma opção: ", (opcao) => {

        switch (opcao) {

            case "1":
                console.log("\n--- DADOS DA CONTA ---");
                console.log(`Nome: ${nome}`);
                console.log(`Agência: ${agencia}`);
                console.log(`Conta: ${conta}`);
                menu();
                break;

            case "2":
                console.log(`\nSaldo atual: R$ ${saldo.toFixed(2)}`);
                menu();
                break;

            case "3":
                rl.question("Digite o valor do débito: R$ ", (valor) => {
                    valor = Number(valor);

                    if (valor <= 0 || isNaN(valor)) {
                        console.log("Valor inválido.");
                    } else if (valor > saldo) {
                        console.log("Saldo insuficiente.");
                    } else {
                        saldo -= valor;
                        console.log(`Débito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
                        console.log(`Novo saldo: R$ ${saldo.toFixed(2)}`);
                    }

                    menu();
                });
                break;

            case "4":
                rl.question("Digite o valor do crédito: R$ ", (valor) => {
                    valor = Number(valor);

                    if (valor <= 0 || isNaN(valor)) {
                        console.log("Valor inválido.");
                    } else {
                        saldo += valor;
                        console.log(`Crédito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
                        console.log(`Novo saldo: R$ ${saldo.toFixed(2)}`);
                    }

                    menu();
                });
                break;

            case "0":
                console.log("\nPrograma encerrado. Até mais!");
                rl.close();
                break;

            default:
                console.log("\nOpção inválida.");
                menu();
        }
    });
}

menu();