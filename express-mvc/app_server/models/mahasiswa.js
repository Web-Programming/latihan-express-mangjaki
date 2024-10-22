let mongoose = require("mongoose");

const schemaMahasiswa = new mongoose.Schema({ 
    nama : String,
    npm : {
        type: String,
        require: true,
    },
    email : {
        type: String,
        require: true,
    },
    tanggal_lahir : {
        type: Date,
    },
    aktif : Boolean,
 });

mongoose.model('Mahasiswa', schemaMahasiswa);