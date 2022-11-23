const inquirer = require('inquirer');
const consoleTable = require('console-table');
const mysql = require('mysql2');
require('dotenv').config();



//Connect to database. Used code from one of ourclass activity files
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: process.env.DB_USER,
        // MySQL password and db from env file
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
    console.log(`Connected to the twitter_db database.`)
);

// Here are all of my functions.It was suggested that I use queries seperately instead of inside of the if then statements like before.
const showDepts = () => {
    const query = `SELECT * FROM department`;
    db.query(query,
        function (err, res) {
            if (err) throw err
            console.table(res)
            menu()
        })
};

const showRoles = () => {
    const query = `SELECT * FROM roles`;
    db.query(query,
        function (err, res) {
            if (err) throw err
            console.table(res)
            menu()
        })
};

const showEmployees = () => {
    const query = `SELECT * FROM employee`;

    db.query(query,
        function (err, res) {
            if (err) throw err
            console.table(res)
            menu()
        })
};

// Prompt User for Choices
const menu = () => {
    inquirer.prompt([
        {
            name: 'prompt',
            type: 'list',
            message: 'What would you like to do:',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update a role',
                'Exit'
            ]
        }
    ])
        .then((answers) => {
            switch (answers.prompt) {
                case 'View all departments':
                    showDepts();
                    break;
                case 'View all roles':
                    showRoles();
                    break;
                case 'View all employees':
                    showEmployees();
                    break;
                case 'Add a department':
                    showDepts();
                    break;
                case 'Add a role':
                    showRoles();

                    break;
                case 'Add an employee':
                    showEmployees();

                    break;

                default:
                    menu();
            }


        })
};

menu();


