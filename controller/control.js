const Store = require('../model/model')
const db = require('../config/db')
const fs = require('fs');

class Controller {

    static getStores(req, res) {

        db.query(Store.getStores(), (err, result) => {

            if (err) throw err;
            res.status(200)
            res.send(result)
        })
    }

    static getStore(req, res) {

        const id = req.params.id

        db.query(Store.getStore(), id, (err, result) => {

            if (err) throw err;
            res.status(200)
            res.send(result)
        })
    }

    static createStore(req, res) {

        const data = req.body;

        let id = data.id;
        let petId = data.petId;
        let quantity = data.quantity;
        let shipDate = data.shipDate;
        let status = data.status;
        let complete = data.complete;

        db.query(Store.createStore(),
            [id, petId, quantity, shipDate, status, complete], (err) => {

                if (err) {
                    res.status(400).json(err)
                    return
                }

                res.status(201)
                res.send(data)
            })
    }

    // static createStore1(req, res) {

    //     const data = req.body;

    //     let id = data.id;
    //     let petId = data.petId;
    //     let quantity = data.quantity;
    //     let shipDate = data.shipDate;
    //     let status = data.status;
    //     let complete = data.complete;

    //     db.query(Store.createStore1(),
    //         [id, petId, quantity, shipDate, status, complete], 
    //         [id, petId, quantity, shipDate, status, complete], 
    //         (err) => {

    //             if (err) {
    //                 res.status(400).json(err)
    //                 return
    //             }

    //             res.status(201)
    //             res.send(data)
    //         })
    // }

    static updateStore(req, res) {

        const data = req.body;

        let id = req.params.id;
        let petId = data.petId;
        let quantity = data.quantity;
        let shipDate = data.shipDate;
        let status = data.status;
        let complete = data.complete;

        db.query(Store.updateStore(),
            [petId, quantity, shipDate, status, complete, id], (err) => {

                if (err) {
                    res.status(400).json(err)
                    return
                }

                if (req.body.id != id) {
                    res.send("Id does not match")
                    return
                }

                res.status(201)
                res.send(req.body)
            });
    }

    static deleteStore(req, res) {

        const id = req.params.id

        db.query(Store.deleteStore(), id, (err, result) => {

            if (err) {
                res.status(400).json(err)
                return
            }

            console.log("Number of records deleted: " + result.affectedRows+ ", id: "+ id);

            res.status(200).send("Number of records deleted: " + result.affectedRows + ", id: "+ id)
        });
    }
}

module.exports = Controller