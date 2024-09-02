const db = require("./db");

let listarSalas = async ()=>{
    let salas = await db.findAll("salas");
    return salas;
};

function listarSalas() {
    return [
        {
            "_id": {
                "$oid": "643ece43ea11e6e5b0421f10"
            },
            "nome": "Só os confirmados da INFO",
            "tipo": "publica"
        },{
            "_id": {
                "$oid": "643ecec1ea11e6e5b0421f12"
            },
            "nome": "Guerreiros da InfoCimol",
            "tipo": "privada",
            "chave": "at8q4haw"
        },
    ];
}

module.exports = {listarSalas};