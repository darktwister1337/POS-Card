let Partner = require('../classes/Partner')
let News = require('../classes/News')
let User = require('../classes/User')
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'urfu1.paulislava.space',
    user: 'admin_pos',
    database: 'admin_pos',
    password: 'nt8ewv6hxK'
}).promise();


const partners = [];
const news = [];
const users = [];


async function getUsers(connect) {

    let result = [];
    await connect
    .query('SELECT `id`, `title` AS `name`, `discount` AS `sale`, `discount_full` AS `description`, `addresses`, `coverUri` AS `logo` FROM `card_partners`')
    .then((x) => {
        x[0].forEach((el) => result.push(new Partner(el)));
    });
    console.log(result);
    return result;
}

async function getNews(connect) {

    let result = [];
    await connect
    .query('SELECT `id`, `title` AS `name`, `discount` AS `sale`, `discount_full` AS `description`, `addresses`, `coverUri` AS `logo` FROM `card_partners`')
    .then((x) => {
        x[0].forEach((el) => result.push(new Partner(el)));
    });
    console.log(result);
    return result;
}

async function getPartners(connection) {

    let result = [];
    await connection
    .query('SELECT `id`, `title` AS `name`, `discount` AS `sale`, `discount_full` AS `description`, `addresses`, `coverUri` AS `logo` FROM `card_partners`')
    .then((x) => {
        x[0].forEach((el) => result.push(new Partner(el)));
    });
    console.log(result);
    return result;
}


console.log(getPartners(connection));

connection.end();

export function getAllPartners(connection){
    getPartners(connection);
}

export default connection;