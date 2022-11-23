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

// Prompt User for Choices
const menuPrompt = () => {
    inquirer.prompt([
        {
            name: 'menu',
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
            switch (answers.menu) {
                case 'View all departments':
                   
                    break;
                case 'View all roles':

                    break;
                case 'View all employees':

                    break;
                case 'Add a department':

                    break;
                case 'Add a role':

                    break;
                case 'Add an employee':

                    break;
                case 'Update a role':

                    break;

                default:
                    menuPrompt();
            }
            //   if (choices === 'View all departments') {
            //     db.query('SELECT * FROM department', function (err, results) {
            //       console.log(results);
            //     });
            //   }

            //   if (choices === 'View all roles') {
            //     db.query('SELECT * FROM roles', function (err, results) {
            //         console.log(results);
            //       });
            // }

            // if (choices === 'View all employees') {
            //     db.query('SELECT * FROM employee', function (err, results) {
            //       console.log(results);
            //     });
            //   }

            //   if (choices === 'Add a department') {

            // }

            // if (choices === 'Add a role') {

            //   }

            //   if (choices === 'Add an employee') {

            // }

            // if (choices === 'Update a role') {

            //   }

            //   if (choices === 'Exit') {
            //      menuPrompt();
            // }

        })
};

menuPrompt();


// // Query database
// db.query('SELECT * FROM students', function (err, results) {
//   console.log(results);
// });

