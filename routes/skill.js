//dependencies
const { Router } = require('express');
const router = Router();
//Model Skill
const Skill = require('../models/Skill');

//Get All Skills
router.get('/',async(req,res) => {
    try {
        const skills = await Skill.find();
        res.status(200).send(skills);
        //res.json(skills)
    } catch (err) {
        res.send({message: err});
    }
});
//Save Skill
router.post('/', async(req,res) => {
    try {
        const  { name, imagePath, porcentage } = req.body;
        const newSkill = new Skill({name,imagePath,porcentage});
        await newSkill.save();
        res.status(201).send({message: "Skill Saved."});
    } catch (err) {
        res.send({message: err});
    }
});
//Specific Skill
router.get('/:id', async(req,res) => {
    try {
        const skill = await Skill.findById(req.params.id);
        res.status(200).send(skill)
    } catch (err) {
        res.json({message: err});   
    }
});
//Delete Skills
router.delete('/:id',async(req,res) => {
    try {
        const skill = await Skill.findByIdAndDelete(req.params.id);
        res.status(200).send({message: "Skill Deleted."});
    } catch (err) {
        res.json({message: err});
    }
});
//update skill
router.put('/:id', async(req,res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        const updateSkill = await Skill.findByIdAndUpdate(id,body,{useFindAndModify:false});
        res.status(200).send({message: "Skill Updated."});    
    } catch (err) {
        res.json({message: err});
    }
});
module.exports = router;