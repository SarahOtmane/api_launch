const Launch = require('../models/launchModel');
const launchApiProvider = require('../providers/launchApiProvider');


exports.listAllLaunches = async (req, res) =>{
    try{
        const launches = await Launch.find({});
        res.status(200);
        res.json(launches);
    }
    catch(error){
        console.log(error);
        res.status(500).json({ message : 'Erreur serveur'});
    }
}

exports.createALaunch = async(req, res) =>{

    try {
        let allLaunches = launchApiProvider.getAlllaunches();
        let response = await allLaunches;

        for(let i = 0; i < response.length; i++) new Launch(response[i]).save();
        
        res.status(201).json({message: 'ok'});        

    } catch (error) {
        console.log(error);
        res.status(401).json({ message : 'Requete invalide'});
    }
}