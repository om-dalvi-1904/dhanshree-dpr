let asyncHandler = require('express-async-handler');
let Project = require('../models/Project');

let projectController = {
    //! add project
    add: asyncHandler(async(req, res)=>{
        let {projectName, workActivity, workArea, projectCost, profit, date} = req.body;
        try{
            let result = await Project.create({
                projectName,
                workActivity,
                workArea,
                projectCost,
                profit,
                date
            })
            res.status(200).json("Project added successfully.");
        }catch(e){
            res.status(404).json(e.message);
        }
    }),
    //! get all projects
    view: asyncHandler(async (req, res)=>{
        let {projectName, date} = req.body;
        if(projectName){
            let filters = {projectName: projectName}
            try{
                let data = await Project.find(filters)
                let result = data.map(item =>({
                    "Project Name": item.projectName,
                    "Work Activity": item.workActivity,
                    "Work Area": item.workArea,
                    "Profit": item.profit,
                }))
                res.status(200).json(result);
            }catch(e){
                res.status(404).json(e.message);
            }
        }else{
            let filters = {date: date}
            try{
                let data = await Project.find(filters)
                let result = data.map(item =>({
                    "Project Name": item.projectName,
                    "Work Activity": item.workActivity,
                    "Work Area": item.workArea,
                    "Profit": item.profit,
                }))
                res.status(200).json(result);
            }catch(e){
                res.status(404).json(e.message);
            }
        }
        
    })
}

module.exports = projectController;