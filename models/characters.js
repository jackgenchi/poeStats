import mongoose from 'mongoose'

const CharacterSchema = new mongoose.Schema({
    //maybe id? to keep track of who switches?
    skill: { 
        type: String, 
        required: [true, 'Skill required'] 
    },
    ascendency: { 
        type: String, 
        required: [true, 'Extension required'] 
    },
    level: { 
        type: Number, 
        required: [true, 'Email required'] 
    },
    leagueChoice: { 
        type: String, 
        required: [true, 'Title required'] 
    },
    date: {
        type: Date,
        required: [true, 'Skill required'] 
    }
})

export default mongoose.model('Character', CharacterSchema)