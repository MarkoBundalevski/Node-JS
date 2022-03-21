const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));

app.get("/", (req, res) => {
    const db = JSON.parse(fs.readFileSync("db.json"));
    const lastUser = db.users[db.users.length - 1];
    res.setHeader("Content-Type", "text/html");
    return res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Homework no.1 Assign. 2</title>
    </head>
    <body>
        <div id="userInfo">
            First name: ${lastUser.firstName}<br/>
            Last name: ${lastUser.lastName}<br/>
            Age: ${lastUser.age}<br/>
            Active: ${lastUser.active?'Yes':'No'}<br/>
        </div>
        <form action="/new_user" method="POST">
            <fieldset>
                <div>
                    <label for="firstName">First name:</label>
                    <input type="text" id="firstName" name="firstName" required autofocus placeholder="Enter your first name">
                </div>
                <div>
                    <label for="lastName">Last name:</label>
                    <input type="text" id="lastName" name="lastName" required placeholder="Enter your last name">
                </div>
                <div>
                    <label for="age">Age:</label>
                    <input type="number" step="1" min="0" id="age" name="age" value="0" required placeholder="Enter your age">
                </div>
                <div>
                    <input type="checkbox" id="active" name="active" value="1" checked>
                    <label for="active">Active</label>
                </div>
                <div>
                    <button type="submit">Create</button>
                </div>
            </fieldset>
        </form>
    </body>
    </html>`);
});

app.post("/new_user", (req, res) => {
    const new_user = {'firstName': req.body.firstName, 'lastName': req.body.lastName, 'age': parseInt(req.body.age), 'active': req.body.active == 1};
    const db = JSON.parse(fs.readFileSync("db.json"));
    db.users.push(new_user);
    fs.writeFileSync("db.json",JSON.stringify(db));
    return res.redirect('/');
});

app.listen(80);