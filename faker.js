var faker = require('faker');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties

let loc = ['Bandung', 'Jakarta', 'Malang', 'Surabaya', 'Depok', 'Denpasar', 'Jogjakarta', 'Palembang']
let result = []
for (let i = 0; i < 15; i++){
    var randomName = faker.name.findName(); // Rowan Nikolaus
    var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    var randomCard = faker.helpers.createCard()
    var obj = 
    {
        name : randomName,
        password : randomName.toString().slice(0,4).toLowerCase(),
        email : randomEmail,
        img_path  : null,
        location : loc[Math.round(Math.random()*7)],
        address  : randomCard.address.streetC,
        balance  : Math.round(Math.random()*1000000000),
        role     : "buyer",
        isLoggedIn : 0,
        createdAt : new Date(),
        updatedAt : new Date()
    }
    result.push(obj)
}

var obj2 = 
    {
        name : 'Admin',
        password : 'admin',
        email   : 'admin@lelangku.com',
        img_path  : null,
        location : 'Jakarta',
        address  : "Jalan Anggrek no 12",
        balance  : 0,
        role     : "admin",
        isLoggedIn : 0,
        createdAt : new Date(),
        updatedAt : new Date()
    }

    result.push(obj2)

module.exports = result