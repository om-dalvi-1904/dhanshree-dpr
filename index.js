let express = require('express');
let mongoose = require('mongoose');
let projectRouter = require('./routes/projectRoute');
let cors = require('cors');

let app = express();
let corsOptions = {
    origin: '*',
}

app.use(cors(corsOptions));

mongoose.connect("mongodb+srv://omdalvi1904:MjppXhuCEA8bEOGx@firstdb.ldmseda.mongodb.net/dhanshree-group")
.then(()=>{
    console.log("DB connected successfully.");
})
.catch((e)=>{
    console.log(e);
})

app.use(express.json());
app.use("/", projectRouter);

app.get('/', (req, res) => {
    res.json('Hello World');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
