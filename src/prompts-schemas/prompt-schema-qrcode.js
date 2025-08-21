import chalk from "chalk";


const promptSchemaQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QR CODE"),
    },
    {
        name: "type",
        description: chalk.yellow("Escolha entre o tipo de QRCode \n1- NORMAL \n2- TERMINAL"),
        pattern: /^[1-2]+$/,
        messgae: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true,
    },

];

export default promptSchemaQRCode;