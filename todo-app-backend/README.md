# Prepare the server

## Initialized the project

Before, make sure, you have Node.js and NPM installed both.
node -v && npm -v
Then, create a new project with npm command.

```
npm init -y
```

And install packages like express, morgan and nodemon.

```
$ npm install express
$ npm install --save-dev morgan nodemon
```

or with yarn

```
$ yarn add express
$ yarn add --dev morgan nodemon
```

## Entry point & First route

Create a new file index.js.

```
touch index.js
```

And copy paste this code to create a simple server running on port 1337.

```
// Import packages
const express = require('express')

// App
const app = express()

// First route
app.get('/', (req, res) => {
res.json({ message: 'Hello world' })
})

// Starting server
app.listen('1337')
```

## Launch server with Nodemon

Open package.json in your editor and add a line in the script object, before “test”.

```
"dev": "node_modules/.bin/nodemon -e js",
```

If you use a Node version ≤ 8.2.1, you will need to add the “ — harmony” flag for using spread operator.

```
"dev": "node_modules/.bin/nodemon --harmony -e js",
```

Save modifications and run the command in your terminal.

```
npm run dev
```

or

```
yarn dev
```

Open your navigator and go to http://localhost:1337 or with CURL command.

```
curl -i http://localhost:1337`
```

Will returns this result.

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Content-Length: 25
Connection: keep-alive
{"message":"Hello world"}
```

Wonferful! We have an object named “message” with the value “Hello world”.

## Our API content

### CRUD operations

For each operation, we will need some JavaScript natives functions.

- Create : array.push()
- Read : array
- Read One : array.find() (return an object)
- Update : array.find(), array.findIndex() (return the index )
- Delete : array.find(), array.filter()

For **Create**, **Update** and **Delete**, the data array will be updated in the JSON file.

### File organisation

Adding some folders and files like helper, models, routes and data.

```
└── helpers
    ├── helper.js
    └── middlewares.js
└── data
    ├── tasks.json
    ├── actions.json
    └── objects.json
└── models
    └── post.model.js
└── routes
    ├── index.routes.js
    └── post.routes.js
```

You can create these folders and files with this command.

```
mkdir helpers && cd helpers && touch helper.js && touch middlewares.js && cd ../ && mkdir models && cd models && touch task.model.js && cd ../ && mkdir routes && cd routes && touch index.routes.js && touch post.routes.js && cd ../ && mkdir data && cd data && touch tasks.json && cd ../
```

## Schema

Let create a task schema with these fields in a row.

- id : Number (unique and increment)
- title : String
- done : Boolean
- doneAt : Date (ISO 8601)

## Datas

Example of data in the **tasks.json**

```
[
    {
        "id": 1,
        "title": "First task",
        "done": false,
        "doneAt": "Mon Aug 27 2020 15:16:17 GMT+0200 (CEST)"
    },
    {
        "id": 2,
        "title": "Second task",
        "done": false,
        "doneAt": "Mon Aug 28 2020 15:16:17 GMT+0200 (CEST)"
    }
]

```
