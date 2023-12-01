const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,        
    },
    nama: {
        type: String,
        required: true,
      },
      absen: {
        type: Number,
        required: true,
      },
      alamat: {
        type: String,
        required: true,
      },
      tempatTanggalLahir: {
        type: String,
        required: true,
      },
      noTelphone: {
        type: Number,
        required: true,
      },
})

module.exports = mongoose.model('dataSiswa', UserSchema)