let asyncHandler = require('express-async-handler');
let Project = require('../models/Project');

let projectController = {
    //! add project
    add: asyncHandler(async(req, res)=>{
        let { date, projectName,  workActivity, workArea, unitCost, supervision, labour, material, transport, accessories, hoistLift, electricityBill, waterBill, rent, misc, total, overallRemarks } = req.body;
        try{
            let result = await Project.create({
                date: date,
                projectName: projectName,
                workActivity: workActivity,
                workArea: workArea,
                unitCost: unitCost,
                supervisionCost: supervision,
                labourCost: labour,
                materialCost: material,
                transportCost: transport,
                accessoriesCost: accessories,
                hoiseCost: hoistLift,
                electricityBill: electricityBill,
                waterBill: waterBill,
                rent: rent,
                miscExpense: misc,
                total: total,
                remarks: overallRemarks
            })
            res.status(200).json("Project added successfully.");
        }catch(e){
            res.status(404).json(e.message);
        }
    }),
    //! get all projects
    view: asyncHandler(async (req, res)=>{
        let { projectName, date } = req.body;
        let filters = {};
        // Build filters based on provided parameters
        if (projectName) {
            filters.projectName = projectName;
        }
        if (date) {
            filters.date = date;
        }
        try{
            let data = await Project.find(filters)
            let result = data.map(item =>({
                "Date": item.date,
                "Project Name": item.projectName,
                "Activity": item.workActivity,
                "Acticity Area": item.workArea,
                "Work Area": item.workArea,
                "Unit Cost": item.unitCost,
                "Supervision Cost": item.supervisionCost,
                "Labour Cost": item.labourCost,
                "Material Cost": item.materialCost,
                "Transport Cost": item.transportCost,
                "Accessories Cost": item.accessoriesCost,
                "Hoise/Lift Cost": item.hoiseCost,
                "Electricity Bill": item.electricityBill,
                "Water Bill": item.waterBill,
                "Rent": item.rent,
                "Misc Expense": item.miscExpense,
                "Total Cost": item.total,
            }))
            res.status(200).json(result);
        }catch(e){
            res.status(404).json(e.message);
        }        
    })
}

module.exports = projectController;