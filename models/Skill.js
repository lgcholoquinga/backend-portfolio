const { Schema, model } = require('mongoose');

const SkillSchema =  new Schema({
    name: {type: String, required: true},
    imagePath: {type: String,required: false},
    porcentage: {type: String, required: true},
    created_at: {type: Date, default: Date.now}
});

module.exports = model('Skill',SkillSchema);