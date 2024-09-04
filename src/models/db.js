const {MongoClient, Collection} = require("mongodb");
const { listarSalas, buscarSala, atualizarMensagens } = require("./salaModel");
const { registrarUsuario, user, alterarUsuario } = require("./usuarioModel");
const { checktoken, setToken } = require("../util/token");
const app = require("../api");
const { buscarMensagens } = require("../controllers/salaController");

let singleton;

async function connect() {
    if (singleton) return singleton;

    const client = new MongoClient(process.env.DB_HOST);
    await client.connect();

    singleton = client.db(process.env.DB_DATABASE
    );
    return singleton;
}

let findAll = async (Collection)=>{
    const db = await connect();
    return await db.Collection(Collection).find().toArray();
}

async function insertOne(collection, objeto) {
    const db = await connect();
    return db.collection(collection).insertOne(objeto) ;   
}

let findOne = async (collection, _id)=>{
    const db = await connect();
    let obj= await db.collection(collection).find({'_id':new ObjectId(_id)}).toArray();
    if(obj)
      return obj[0];
    return false;
  }
  
let updateOne= async (collection, object, param)=>{
    const db = await connect();
    let result= await db.collection(collection).updateOne(param, { $set: object} );
    return result;
  }  

module.exports={findAll, listarSalas, Collection, insertOne, registrarUsuario, setToken, checktoken, buscarSala, user, alterarUsuario, findOne, updateOne, atualizarMensagens, buscarMensagens, id, token};