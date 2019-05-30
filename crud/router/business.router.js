const express = require('express');
const businessRoutes = express.Router();
let Business = require('../api/models/Business');

businessRoutes.route('/add').post(function(req, res){
    let business = new Business(req.body);
    business.save()
        .then(business = {
            res.status(200).json({'business': 'business in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        })
});
businessRoutes.route('/').get(function(req, res){
    Business.find(function(err, businesses){
        Business.find(function(err, businesses){
            if(err){
                console.log(err);
            }else{
                res.json(businesses);
            }
        })
    })
});
businessRoutes.route('/edit/:id').get(function(req, res){
    let id = req.params.id;
    Business.findById(id, function (err, business){
        if(err)
            console.log(err)
        else
            res.json(businesses)
    })
});
businessRoutes.route('/update/:id').post(function(req, res){
    Business.findById(id, function(err, businesses){
        if(!businesses)
            res.status(400).send("data is not found");
        else{
            business.person_name = req.body.person_name;
            business.business_name = req.body.business_name;
            business.business_gst_number = req.body.business_gst_number;
            business.save()
                .then(business => {
                    res.json("Updae complete");
                })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }

    })
})
businessRoutes.route('/delete/:id').get(function(req, res){
    business.findByIdAndRemove({_id:req.params.id}, function(err, business){
        if(err)
            res.json(err)
        else    
            res.jsob('Successflly removed');
    })
})

module.exports =  businessRoutes;