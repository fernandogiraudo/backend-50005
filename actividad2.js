const fs = require('fs');
const crypto = require('crypto');

class UserManager {
    constructor(path){
        this.path = path;
    }

    async agregarUsuario(usuario){
        if(!usuario.nombre || !usuario.apellido || !usuario.password || !usuario.nombreUsuario){
            return console.log('Usuario incompleto');
        }
        const {nombre, apellido, password, nombreUsuario} = usuario;
        const usuarios = await this.obtenerUsuarios();
        const hashedPassword = this.hashearPassword(password);
        const newUser = {
            nombre,
            apellido,
            nombreUsuario,
            password: hashedPassword
        };
        usuarios.push(newUser);
        await fs.promises.writeFile(this.path, JSON.stringify(usuarios), 'utf-8');
    }

    async obtenerUsuarios(){
        try {
            const resultado = await fs.promises.readFile(this.path, 'utf-8');
            const usuarios = JSON.parse(resultado);
            return usuarios;
        } catch (error) {
            return [];
        }
    }

    async validarUsuario(nombreUsuario, password){
        const users = await this.obtenerUsuarios();
        const user = users.find(u => u.nombreUsuario === nombreUsuario);
        if(!user){
            return console.log('El usuario no existe');
        }
        const dbPassword = user.password;
        const hashedPassword = this.hashearPassword(password);
        if(dbPassword === hashedPassword){
            return console.log('Logueado');
        }
        else{
            return console.log('Contraseña incorrecta');
        }
        
    }

    hashearPassword(password){
        const hash = crypto.createHash('sha256');
        hash.update(password);
        const hashedPassword = hash.digest('hex');
        return hashedPassword;
    }
}

const test = async () => {
    const userManager = new UserManager('./user.json');
    // await userManager.agregarUsuario({
    //     nombre: 'Fernando',
    //     apellido: 'Giraudo',
    //     password: '123456789',
    //     nombreUsuario: 'fergiraudo'
    // });
    // await userManager.agregarUsuario({
    //     nombre: 'Sergio',
    //     apellido: 'Sosa',
    //     password: '987654321',
    //     nombreUsuario: 'sersosa'
    // });


    await userManager.validarUsuario('fergiraudo', '123456789');
}

test();