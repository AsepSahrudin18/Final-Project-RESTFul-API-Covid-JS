// import patient controller
const PatientController = require("../controller/PatientController");

// import router
const express = require("express");

// buat object router
const router = express.Router();



// membuat routing home
router.get("/", (req, res) => {
    res.send("Hello Express, ini merupakan final project Asep Sahrudin :)");
});

// membuat routing patients dengan get all resource
router.get("/patients", PatientController.index);


// membuat routing patients dengan post untuk menambahkan data patient
router.post("/patients", PatientController.store);


// membuat routing patients dengan put untuk mengedit data patient berdasarkan id
router.put("/patients/:id", PatientController.update);

// membuat routing patients dengan delete untuk menghapus data patient berdasarkan id
router.delete("/patients/:id", PatientController.destroy);

// membuat routing patients dengan get one resorce untuk menampilkan data patient berdasarkan id
router.get("/patients/:id", PatientController.show);


// export router
module.exports = router;