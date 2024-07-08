const {MongoClient, Collection} = require("mongodb");
const { listarSalas } = require("./salaModel");

let singleton;

async function connect() {
    if (singleton) return singleton;

    const client = new MongoClient(process.env.DB_HOST);
    await client.connect();

    singleton = client.db(process.env.DB);
    return singleton;
}

let findAll = async (Collection)=>{
    const db = await connect();
    return await db.Collection(Collection).find().toArray();
}

module.exports={listarSalas};