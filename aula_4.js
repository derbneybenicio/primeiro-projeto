const cliente_1 = "Beneficiario";
const cliente_2 = "Gerador";
const cliente_3 = "Admin";

const cliente_logado = "Admin";

switch(cliente_logado) {
    case cliente_1:
        console.log("Cliente tipo 1");
        break;
    case cliente_2:
        console.log("Cliente tipo 2");
        break;
    case cliente_3:
        console.log("Cliente tipo 3");
        break;
    default:
        console.log("Nenhum dos casos")
        break; 
}