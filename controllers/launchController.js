const Launch = require('../models/launchModel');
const textApiProvider = require('../providers/textApiProvider');


exports.listAllLanches = async (req, res) =>{
    try{
        const lanches = await Launch.find({});
        res.status(200);
        res.json(lanches);
    }
    catch(error){
        console.log(error);
        res.status(500).json({ message : 'Erreur serveur'});
    }
}