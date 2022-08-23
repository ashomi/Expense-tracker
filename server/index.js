const express = require("express");
const app = express();
const cors = require('cors')
const env = require('dotenv')
const Connection = require("./Connection/connection")
const bodyparser = require('body-parser')
const authRoute = require("./Routes/auth")
const UsersRoute = require("./Routes/users")
const CalendarRoute = require("./Routes/calendar")
const IncomeRoute = require('./Routes/income')
const ExpensesRoute = require('./Routes/expenses')
const CatRoute = require('./Routes/Categoriesexpense')
Connection()
env.config()
app.use(cors());
app.use(express.json());
app.use('/auth',authRoute);
app.use('/users',UsersRoute)
app.use('/calendars',CalendarRoute)
app.use('/incomes',IncomeRoute)
app.use('/expenses',ExpensesRoute)
app.use('/categories',CatRoute)
const serverPort = 8000;
//middleware error handler
app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something Went Wrong";
    console.log("I am in a error middleware")
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    });
});
app.listen(serverPort,()=>{
    console.log(`Server is running on Port :${serverPort}`)
})