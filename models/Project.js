let mongoose = require('mongoose');

let projectSchema = new mongoose.Schema(
    {
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
        projectCost: {
            type: Number,
            required: true
        },
        profit: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Project', projectSchema);