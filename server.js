const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
const connectDB = async () => {
    try {
        await mongoose.connect(uri, { 
            useNewUrlParser: true,
            useCreateIndex: true, 
            useUnifiedTopology: true
        })
        console.log('MongoDB connected!!');
    } catch(error) {
        console.log('Failed to connect to MongoDB', error);
    }    
}

connectDB();

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const monitoringRouter = require('./routes/monitoring');

app.use('/', monitoringRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});