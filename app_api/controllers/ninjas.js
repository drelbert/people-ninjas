const mongoose = require('mongoose');
const Nin = mongoose.model('Ninja');

const ninjasList = (req, res) => {
    Nin 
        //Using the find method.
        .find(req.params.ninjas)
        .exec((err, ninjas) => {
          res 
          .status(200)
          .json(ninjas);
        });
 };
const ninjasReadOne = (req, res) => {
    Nin
        //This is the findById method, using params to access the id.
        .findById(req.params.ninjaid)
        //Chaining the exec method runs the query and passes the callback.
        //With 2 parameters.
        //This approach enasures the db interaction is asynch so no blocking the Node process.
        .exec((err, ninja) => {
            if(!ninja) {
                return res 
                .status(404)
                .json({"message" : "Ninja not found"});
            } else if (err) {
                return res 
                    .status(404)
                    .json(err);
            } else {
                return res 
                    .status(200)
                    .json(ninja);
            }
        })
 };
const ninjasCreate = (req, res) => { 
    Nin.create({
        name: req.body.name,
        team: req.body.team,
        skills: req.body.skills.split(","),
        projects: req.body.projects.split(","),
        ninjaRating: req.body.ninjaRating,
        projectDetails: [
        {
            title: req.body.title,
            updatedBy: req.body.updatedBy,
            createdOn: req.body.createdOn,
            completedLastWeek: req.body.completedLastWeek,
            upcomingWork: req.body.upcomingWork,
            issues: req.body.issues,
            projectDue: req.body.projectDue
        }
       ]
    })
};
const ninjasUpdateOne = (req, res) => { };
const ninjasDeleteOne = (req, res) => { 
    const {ninjaid} = req.params;
    if(ninjaid) {
        Nin 
            .findByIdAndRemove(ninjaid)
            .exec((err, ninja) => {
                if(err) {
                    return res 
                      .status(404)
                      .json(err);
                }
                res 
                  .status(204)
                  .json(null);
            }
        );
    } else {
        res 
         .status(404)
         .json({
             "message": "No ninja"
         });
    }
};

module.exports = {
    ninjasList,
    ninjasReadOne,
    ninjasCreate,
    ninjasDeleteOne,
    ninjasUpdateOne
};