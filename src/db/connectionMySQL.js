import Partner from "./classes/Partner.js";
import News from "./classes/News.js";
import User from "./classes/User.js";


export default function DataGetter() {
    const mysql = require('mysql2');

    const connection = mysql.createConnection({
        host: 'urfu1.paulislava.space',
        user: 'admin_pos',
        database: 'admin_pos',
        password: 'nt8ewv6hxK'
    }).promise();

    this.getPartners = async function() {

        let result = [];
        await connection
        .query('SELECT `id`, `title` AS `name`, `discount` AS `sale`, `discount_full` AS `description`, `addresses`, `coverUri` AS `logo` FROM `card_partners`')
        .then((x) => {
            x[0].forEach((el) => result.push(new Partner(el)));
        });
        console.log(result);
        return result;
    };

    this.getNews = async function() {

        let result = [];
        await connection
        .query('SELECT `id`, `title` AS `name`, `discount` AS `sale`, `discount_full` AS `description`, `addresses`, `coverUri` AS `logo` FROM `card_partners`')
        .then((x) => {
            x[0].forEach((el) => result.push(new Partner(el)));
        });
        console.log(result);
        return result;
    };

    this.getUsers = async function() {

        let result = [];
        await connection
        .query('SELECT `id`, `title` AS `name`, `discount` AS `sale`, `discount_full` AS `description`, `addresses`, `coverUri` AS `logo` FROM `card_partners`')
        .then((x) => {
            x[0].forEach((el) => result.push(new Partner(el)));
        });
        console.log(result);
        return result;
    };

    this.end = function () {
        connection.end();
    };
}