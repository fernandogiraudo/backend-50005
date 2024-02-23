class ContactDTO {
    constructor(contact){
        this.first_name = contact.first_name;
        this.last_name = contact.last_name;
        this.fullName = `${this.first_name} ${this.last_name}`;
        this.active = true;
        this.phone = contact.phone;
    }
}

export default ContactDTO;