// import database
const { query } = require("express");
const db = require("../config/database");


// buat model patient 
// sebelum di promise
// class Patient{
//     static all(callback){
//         // lakukan query ke db untuk ambil data

//         const sql = "SELECT * FROM patients";
//         db.query(sql, (err, results) => {
//             callback(results);
//         });
//     }
// }


// buat model patient
// sesudah di promise
class Patient{
    static all(){
        return new Promise((resolve, reject) => {
            // lakukan query ke db untuk ambil data
        const sql = "SELECT * FROM patients";
        db.query(sql, (err, results) => {
            resolve(results);
        });
        });
    } 

    static async create(data) {
        // Promise 1 : insert data
        const id = await new Promise((resolve, reject) => {
            // insert data ke database
            const sql = "INSERT INTO patients SET ?";
            db.query(sql, data, function(err, results){
                resolve(results.insertId);
            });
        });
        // Promise 2: select data yang baru di insert
        const patient = await this.find(id);
        return patient;
    }

    static find(id){
        // lakukan promise, select by id
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM patients WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }

    static async update(id, data) {
        // update data
        await new Promise((resolve, reject) => {
            //query untuk update data
            const sql = "UPDATE patients SET ? WHERE id = ?";
            db.query(sql, [data, id], (err, results) => {
                resolve(results);
            });
        });
        // select data by id
        const patient = await this.find(id);
        return patient;
    }

    static delete(id){
        // query delete
        return new Promise((resolve, reject) => {
            // query sql
            const sql = "DELETE FROM patients WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }
}



// exports model
module.exports = Patient;