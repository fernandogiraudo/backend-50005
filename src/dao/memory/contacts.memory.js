export default class Conctacts {
    constructor(){
        this.data = [];
    }

    get = () => {
        return this.data;
    }

    post = (contact) => {
        this.data.push(contact);
        return true;
    }

    put = (id, contact) => {
        this.data = this.get().map(e => {
            if(e.id === id){
                return contact;
            }
            return e;
        });
        return true;
    }

    delete = (id) => {
        this.data = this.get().filter(e => e.id !== id);
        return true;
    }
}