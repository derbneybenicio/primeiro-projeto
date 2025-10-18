// 1. Menu de Opções:
// Crie um menu com algumas opções (ex: 1- Cadastrar, 2- Listar, 3- Editar, 4- Excluir) e execute a ação correspondente à opção escolhida.

const menuItem = 1;

switch(menuItem) {
    case 1:
        console.log("Cadastrar")
        break;
    case 2:
        console.log("Listar")
        break;
    case 3:
        console.log("Editar")
        break;
    case 4:
        console.log("Excluir")
        break;
    default:
        console.log("Opção inválida")
        break;
}