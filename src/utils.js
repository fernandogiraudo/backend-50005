import { Faker, es, en } from '@faker-js/faker';

const faker = new Faker({
    locale: [es, en]
});

export const generateUser = () => {
    const numOfProducts = parseInt(faker.string.numeric(1, {bannedDigits: ['0']}));
    const products = [];
    for(let i=0; i <numOfProducts; i++){
        products.push(generateProduct());
    }
    return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        sex: faker.person.sexType(),
        birhtDate: faker.date.birthdate(),
        phone: faker.phone.number(),
        image: faker.image.avatar(),
        id: faker.database.mongodbObjectId(),
        email: faker.internet.email(),
        role: faker.number.int() % 2 === 0 ? 'client': 'seller',
        premium: faker.datatype.boolean(),
        occupation: faker.person.jobTitle(),
        products
    }
}

export const generateProduct = () => {
    return {
        title: faker.commerce.productName(),
        code: faker.string.alphanumeric({length: 10}).toUpperCase(),
        description: faker.lorem.paragraph(),
        price: faker.commerce.price(),
        department: faker.commerce.department(),
        stock: faker.number.int({min: 0, max: 100}),
        id: faker.database.mongodbObjectId(),
        image: faker.image.url()
    }
}