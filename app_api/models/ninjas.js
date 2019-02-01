const mongoose = require('mongoose');

//Constructor function for defining the schema.
const projectDetailsSchema = new mongoose.Schema({
    title: String,
    updatedBy: String,
    createdOn: {
        type: Date,
        defaut: Date.now
    },
    completedLastWeek: String,
    upcomingWork: String,
    issues: String,
    projectDue: {
        type: Date,
        required: true
    }
});

const ninjaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    team: String,
    skills: [String],
    projects: [String],
    ninjaRating: {
        type: Number,
        'default': 0,
        min: 0,
        max: 5
    },
    projectDetails: [projectDetailsSchema]
 });
//Code to build model of the ninjas schema.  
 mongoose.model('Ninja', ninjaSchema);


 /*
 db.ninjas.save({
     name: 'Vader',
     team: 'Dark Side',
     skills: ['Saber Wielding', 'Choke Hold', 'Death Star Contruction'],
     projects: ['El Diablo Star', 'Building Green in Space'],
     ninjaRating: 3
 })

 db.ninjas.update({
     name: 'Vader',
    }, {
        $push: {
            projectDetails: {
                title: 'El Diablo Star',
                updatedBy: 'The Dark Lord',
                createdOn: new Date("January 25, 2019"),
                completedLastWeek: "Completed core super structure.",
                upcomingWork: "Build middle structure for housing El Rey Gun.",
                issues: "W-Wing Dive Bombers",
                projectDue: "Aug 24, 2020",
                _id: ObjectId()
            }
        }
 })
*/

