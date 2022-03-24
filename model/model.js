// const fs = require('fs')
// const db = require('../config/db')

class Store {

    static getStores() {
        let sql = `SELECT * FROM store1`;
        return sql;
    }

    static getStore() {
        let sql = `SELECT * FROM store1 where id = ?`;
        return sql;
    }

    static createStore() {
        let sql = `INSERT INTO store1
        (id, petId, quantity, shipDate, status, complete)
        VALUES (?, ?, ?, ?, ?, ?)`;
        return sql;
    }

    // static createStore1() {
    //     let sql = `INSERT INTO store1
    //     (id, petId, quantity, shipDate, status, complete)
    //     VALUES (?, ?, ?, ?, ?, ?),
    //     VALUES (?, ?, ?, ?, ?, ?)`; 
    //     return sql;
    // }

    static updateStore() {
        let sql = `UPDATE store1 SET 
        petId = ?, quantity = ?, shipDate = ?, status = ?, complete = ? 
        WHERE id = ?`;
        return sql;
    }

    static deleteStore() {
        let deleteQuery = `DELETE FROM store1 WHERE id = ?`;
        return deleteQuery;
    }
}

module.exports = Store