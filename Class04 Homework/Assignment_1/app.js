const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if(req.url == "/"){
        const db = JSON.parse(fs.readFileSync("db.json"));
        const lastUser = db.users[db.users.length - 1];
        res.setHeader("Content-Type", "text/html");
        return res.end(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Homework no.1 Assign. 1</title>
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
    }
    else if(req.url == "/new_user" && req.method == "POST"){
        let chunks = [];
        req.on('data', (chunk) => {
            chunks.push(chunk);
        });
        req.on("end", () => {
            const dataString = Buffer.concat(chunks).toString();
            const splittedData = dataString.split('&');
            const new_data = {};
            splittedData.forEach(data => {
                const keyValueSplit = data.split('=');
                const key = keyValueSplit[0];
                const value = keyValueSplit[1];
                new_data[key] = value;
            });
            const new_user = {'firstName': new_data.firstName, 'lastName': new_data.lastName, 'age': parseInt(new_data.age), 'active': new_data.active == 1};
            const db = JSON.parse(fs.readFileSync("db.json"));
            db.users.push(new_user);
            fs.writeFileSync("db.json",JSON.stringify(db));
            res.writeHead(302,{Location:'/'});
            return res.end();
        }); 
    }
});
server.listen(80);