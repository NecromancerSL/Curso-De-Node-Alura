import mongoose from "mongoose";

mongoose.set('strictQuery', true);

//conexao com o mongodb atlas
mongoose.connect("mongodb+srv://GustavoNunes:4213@gustavodb.ar4b5rj.mongodb.net/node-bd");

let db = mongoose.connection;

export default db;