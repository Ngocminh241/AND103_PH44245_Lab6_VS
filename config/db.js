const mongoose = require('mongoose');

const local = "mongodb+srv://admin:admin@cluster0.jcetqj6.mongodb.net/md18309";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
