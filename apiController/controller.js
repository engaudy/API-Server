const express = require('express');
const router = express.Router();
const data = require('../apiModel/data')

router.get('/', function(req,res){
    res.status(200).json(data);
})

//GET
router.get('/:id', function(req,res){
    let found = data.find(function (item){
        return item.id ===  parseInt(req.params.id)
    });
    if(found){
        res.status(200).json(found);
    }else {
        res.sendStatus(404);
    }
})

//POST
router.post('/', function(req,res){
    let itemIds = data.map(item => item.id);
    let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;
    let newItem = {
        id: newId,
        name: req.body.name,
        country: req.body.country,
        phone: req.body.phone,
        active: req.body.active,
        createdOn: new Date()
    }
    data.push(newItem);
    res.status(201).json(newItem);
})

//PUT
router.put('/:id', function(req,res){
    let found = data.find(function (item){
        return item.id ===  parseInt(req.params.id)
    });
    if(found){
        let updated = {
            id: found.id,
            name: typeof(req.body.name) !="undefined" ? req.body.name: found.name,
            country: typeof(req.body.country) !="undefined" ? req.body.country: found.country,
            phone: typeof(req.body.phone) !="undefined" ? req.body.phone: found.phone,
            active: typeof(req.body.active) !="undefined" ? req.body.phone: found.active,
            createdOn: found.createdOn

        }
        let targetIndex = data.indexOf(found);
        data.splice(targetIndex, 1, updated);
        res.sendStatus(200);
    }else {
        res.sendStatus(404);
    }
})

//DELETE
router.delete('/:id', function(req,res){
    let found = data.find(function (item){
        return item.id ===  parseInt(req.params.id)
    });
    if(found){
        let targetIndex = data.indexOf(found);
        data.splice(targetIndex, 1);
        res.sendStatus(200);
    }else {
        res.sendStatus(404);
    }
})

module.exports = router;