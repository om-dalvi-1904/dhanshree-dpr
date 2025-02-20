let mongoose = require('mongoose');

let projectSchema = new mongoose.Schema(
    {
        date: {
            type: String,
            required: true
        },
        projectName: {
            type: String,
            required: true
        },
        workActivity: {
            type: String,
            required: true
        },
        workArea: {
            type: Number,
            required: true
        },
        unitCost: {
            type: Number,
            required: true
        },
        supervisionCost: {
            type: Number
        },
        labourCost:  {
            type: Number
        },
        materialCost:  {
            type: Number
        },
        transportCost:  {
            type: Number
        },
        accessoriesCost:  {
            type: Number
        },
        hoiseCost:  {
            type: Number
        },
        electricityBill:  {
            type: Number
        },
        waterBill:  {
            type: Number
        },
        rent:  {
            type: Number
        },
        miscExpense:  {
            type: Number
        },
        total: {
            type: Number
        },
        remarks: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Project', projectSchema);