const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const monitoringSchema = new Schema({
    nama: { type: String, required: true },
    alamat: { type: String, required: true },
    id: { type: String, required: true },
    value: { type: Number, required: true },
    date: { type: Date, default: Date.now },
});

const Monitoring = mongoose.model('Monitoring', monitoringSchema);

module.exports = Monitoring;