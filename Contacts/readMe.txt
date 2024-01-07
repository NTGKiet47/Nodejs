1. having error with return json format with error handler but get html instead
video at 28:00
====> but the app.use(errorHanlder) underneath the app.use('/)

2. Do not use format: exporst.const = ...
====> use module.exports = ...

3. Using mongodb and mongoose give us a promise everytime 
we access the database
====> Using async function for the controllers

4. Using async function must have the try catch block
====> npm i express-async-handler
====> Express has middleware to handle that, we do not
need to use try catch
ex: this is the original function
    const getAllContacts = async (req, res) => {
    res.json({
        message: "Get all contacts",
    });
    };
====> with express-async-handler
    const asyncHandler = require("express-async-handler");
    const getAllContacts = asyncHandler(async (req, res) => {
    res.json({
        message: "Get all contacts",
    });
    });

5. Connecting to mongodb
    Using compass: paste the connection string into the compass
    mongodb+srv://giakiet:<password>@cluster0.fhsciuz.mongodb.net/<database_name>

    Then connect to application through driver:
    mongodb+srv://giakiet:<password>@cluster0.fhsciuz.mongodb.net/<database_name>?retryWrites=true&w=majority