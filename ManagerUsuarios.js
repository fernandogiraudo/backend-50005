// ¿Cómo lo hacemos? Se creará una clase que permita gestionar usuarios usando fs.promises,
// éste deberá contar sólo con dos métodos: Crear un usuario y consultar los usuarios guardados.

// El Manager debe vivir en una clase en un archivo externo llamado ManagerUsuarios.js
// El método “Crear usuario” debe recibir un objeto con los campos:
// Nombre
// Apellido
// Edad
// Curso
// El método debe guardar un usuario en un archivo “Usuarios.json”, deben guardarlos dentro de un
// arreglo, ya que se trabajarán con múltiples usuarios

// El método “ConsultarUsuarios” debe poder leer un archivo Usuarios.json y devolver el arreglo
// correspondiente a esos usuarios

const fs = require("fs");

class ManagerUsuarios {
  constructor(path) {
    this.path = path;
  }

  async crearUsuario(user) {
    if(!user.nombre || !user.apellido || !user.edad || !user.curso){
        return console.log('Usuario incompleto');
    }
    const users = await this.consultarUsuarios();
    users.push(user);
    console.log(users);
    await fs.promises.writeFile(this.path, JSON.stringify(users), 'utf-8');
  }

  async consultarUsuarios() {
    try {
      const datos = await fs.promises.readFile(this.path, "utf-8");
      const parsedData = JSON.parse(datos);
      return parsedData;
    } catch (error) {
      console.log("No hay datos");
      return [];
    }
  }
}

const test = async () => {
    const managerUsuarios = new ManagerUsuarios('./Usuarios.json');
    let data = await managerUsuarios.consultarUsuarios();
    const user1 = {
        nombre: 'Fernando',
        apellido: 'Giraudo',
        edad: 32,
        curso: 'Backend'
    }

    const user2 = {
        nombre: 'Sergio',
        apellido: 'Sosa',
        edad: 28,
        curso: 'React'
    }

    const user3 = {
        nombre: 'Fernando',
        apellido: 'Giraudo',
    }

    await managerUsuarios.crearUsuario(user1);
    await managerUsuarios.crearUsuario(user2);
    await managerUsuarios.crearUsuario(user3);
    data = await managerUsuarios.consultarUsuarios();
    console.log(data);
}

test();