const mongoose = require('mongoose');
const Nin = mongoose.model('Ninja');

const doAddProjectDetails = (req, res, ninja) => {
    if(!ninja) {
        res
          .status(404)
          .json({"message": "Ninjs not found"});
    } else {
        const {title, updatedBy, createdOn, completedLastWeek, upcomingWork, issues, projectDue} = req.body;
        ninja.projectDetails.push({
            title,
            updatedBy,
            createdOn,
            completedLastWeek,
            upcomingWork,
            issues,
            projectDue,  
        });
        ninja.save((err, ninja) => {
            if(err) {
                res 
                  .status(400)
                  .json(err);
            } else {
                let thisProjectDetails = ninja.projectDetails[ninja.projectDetails.length - 1];
                res 
                  .status(201)
                  .json(thisProjectDetails)
            }
        });
    }
};
const projectDetailsCreate = (req, res) => { 
    const ninjaId  = req.params.ninjaid; 
    if (ninjaId) {
        Nin
            .findById(ninjaId)
            .select('projectDetails')
            .exec((err, ninja) => {
                if (err) {
                    res 
                        .status(400)
                        .json(err);
                } else {
                    doAddProjectDetails(req, res, ninja)
                }
            });
    }  else {
        res 
            .status(404)
            .json({"message": "Project not found"});
    }
};
const projectDetailsReadOne = (req, res) => { };
const projectDetailsUpdateOne = (req, res) => { };
const projectDetailsDeleteOne = (req, res) => { };

module.exports = {
    projectDetailsCreate,
    projectDetailsReadOne,
    projectDetailsUpdateOne,
    projectDetailsDeleteOne
};
