// Imports Model Patient
const Patient = require("../models/Patient");


// Buat Class Patient Controller
class PatientController {
    //sebelum di promise
    // index(req, res){
    //     Patient.all(function(results){
    //         const data = {
    //             mesage : "Menampilkan semua data patients",
    //             data : results,
    //         };
    
    //         res.json(data);
    //     });


        
    // }

/**
 * index untuk menampilkan semua data
 * store untuk menambahkan data
 * update untuk edit data
 * destroy untuk hapus data
 * show untuk menampilkan data berdasarkan id
 * @param {object} req - object request untuk nangkap data
 * @param {object} res - object respons untuk mengirim kembali respons yang diinginkan
 */

    async index(req, res){
        const patients = await Patient.all();

        const data = {
            message : "Get All Resource",
            data : patients,
        };
        
        res.status(200).json(data);
    }

 
    async store(req, res){
        // jalankan method create dari model patients
        // kirim data

        const patient = await Patient.create(req.body);
        const data = {
            message: "Resource is added successfully",
            data: patient,
        };
        
        res.status(201).json(data);
    }

    async update(req, res){
        // cek apakah id patients ada
        // jika ada,lakukan update
        // jika tidak, kirim data tidak ada
        const { id } = req.params;

        const patient = await Patient.find(id);

        if (patient.length>0) {
            // update data
            const patientUpdated = await Patient.update(id, req.body);

            const data = {
                message: "Resource is update successfully",
                data: patientUpdated,
            };
            
            res.status(200).json(data);
        }
        else{
            const data = {
                message: "Resource not found",
            };
            
            res.status(404).json(data);
        } 
    }    

    async destroy(req, res){
        const {id} = req.params;

        // cari id
        // jika ada hapus data
        // jika tidak, kirim pesan tidak ada
        const patient = await Patient.find(id);

        if(patient.length>0){
            // hapus data
            await Patient.delete(id);

            const data = {
                message: "Resource is delete successfully",
            };
            
            res.status(200).json(data);
        }
        else{
            // data tidak ada
            const data = {
                message: "Resource not found",
            };
            
            res.status(404).json(data);
        }
    }

    async show(req, res){
        // cari id
        // jika ada kirim datanya
        // jika tidak ada, kirim data tidak ada
        const {id} = req.params;

        const patient = await Patient.find(id);
        if(patient.length > 0){
            const data = {
                message: "Get Detail Resource",
                data: patient,
            };

            res.status(200).json(data);
        }
        else{
            const data = {
                message: "Resource not found",
            };
            
            res.status(404).json(data);
        }
    }
}


// membuat object
const object = new PatientController();

// export object
module.exports = object;