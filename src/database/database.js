const mongoose = require("mongoose");

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

function connectToDatabase() {
    mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@api-test.rdnn5m9.mongodb.net/bancodaapi?retryWrites=true&w=majority`,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Conectado ao MongoDB!");
    }).catch((err) => {
        return console.log(`Erro na conexao com o banco: ${err}`);
    })
}

module.exports = connectToDatabase;