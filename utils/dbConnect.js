import mongoose from "mongoose";

const connection = {}

async function dbConnect() {
    if(connection.isConnected) return

    const db = await mongoose.connect("mongodb://localhost:27017/task",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex:true
    })
 
    connection.isConnected = db.connections[0].readyState
}

export default dbConnect;