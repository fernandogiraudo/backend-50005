import express from 'express';
import { Command } from 'commander';
import { getVariables } from './config.js';

const app = express();
const program = new Command();
program.option('--mode <mode>', 'Modo de trabajo', 'production');
const options = program.parse();

const { port } = getVariables(options);

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})

// console.log(process.argv.slice(2));

// const program = new Command();

// program
//     .option('-d', 'Variable para debug', false)
//     .option('-p <port>', 'Puerto del servidor', 8080)
//     .option('--mode <mode>', 'Modo de trabajo', 'production')
//     .requiredOption('-u <user>', 'Usuario utilizando la aplicación', 'No se ha declarado un usuario')
//     .option('-l --letters [letters...]', 'especifique las letras');

// program.parse();

// console.log('Options', program.opts());

// console.log(`Argumentos de mas`, program.args);

