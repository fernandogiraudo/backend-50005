class Person {
  constructor(name) {
    this.name = name;
  }

  obj = {
    name: "Juan",
    regularFunc: function () {
      console.log(`Nombre (Función Regular): ${this.name}`);
    },
    arrowFunc: () => {
      console.log(`Nombre (Función Flecha): ${this.name}`);
    },
  };
}

const empleado1 = new Person('Fernando');

empleado1.obj.regularFunc();
empleado1.obj.arrowFunc();
