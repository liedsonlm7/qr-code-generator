import chalk from "chalk";

const promptSchemaMain = [
    {
        name: "select",
        description: chalk.yellow("Escolha a ferramenta \n1 - QRCODE \n2 - PASSWORD"), 
        pattern: /^[1-2]+$/, 
        message: "Escolha apenas entre 1 e 2", 
        required: true,
    }
];

export default promptSchemaMain;