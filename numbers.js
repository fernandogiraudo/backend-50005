import { Command } from "commander";

const program = new Command();

program
  .option("-d", "Variable para debug", false)
  .option("-p <port>", "Puerto sel servidor", 8080)
  .option("-n --numbers [numbers...]", "Numeros informados");

program.parse();

const numbers = program.opts().numbers;

const listNumbers = (numbers) => {
  if (!numbers || typeof numbers !== "object") {
    throw {
      description: "Sin numeros",
    };
  }

  numbers.forEach((number) => {
    if (isNaN(number)) {
      throw {
        description: "Error de tipo",
        numeros: numbers,
      };
    }
  });
};

listNumbers(numbers);

process.on("uncaughtException", (err) => {
  console.log(err);
  switch (err.description) {
    case "Sin numeros":
      return process.exit(-4);

    case "Error de tipo":
      return process.exit(-5);
  }
});

process.on("exit", (code) => {
  if (code) {
    console.log(`Saliendo con código ${code}`);
  } else {
    console.log("Adios!");
  }
});
