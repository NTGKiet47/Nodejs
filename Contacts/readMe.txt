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

6. The schema will has the field in the object we store in db

7. Using async function to find data will not work if there is no data (for example)
====> adding await
    const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.json({
        message: contacts,
    });
    });

8. Having problem with findById, if the id is longer than the actual id in database
the function cannot return the value. The id could be wrong
but must be the exact length

9. In order to hash the password of user, we will use 
bcrypt library

10. Json web token, using for authorization for LOGGING IN
jwt has structure like this
    Header
    Payload
    Signature
====> It will look like this: xxxxx.yyyyy.zzzzz
Link to read more: https://jwt.io/introduction

11. With the authorization function, such as LOGGING
we should add the expiration to check the timeout, 
if it is, the access token isn't valid anymore
====> { expiresIn: "1m" } 