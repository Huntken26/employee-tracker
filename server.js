const inquirer = require('inquirer');
const consoleTable = require('console.table');
const mysql = require('mysql2');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3001;
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Connect to database. Used code from one of ourclass activity files
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
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
          name: 'Menu',
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
        const {choices} = answers;
  
          if (choices === 'View all Departments') {
            db.query('SELECT * FROM department', function (err, results) {
              console.log(results);
            });
          }
  
          if (choices === 'View all roles') {
            db.query('SELECT * FROM roles', function (err, results) {
                console.log(results);
              });
        }
  
    })
  };




// // Query database
// db.query('SELECT * FROM students', function (err, results) {
//   console.log(results);
// });

// // Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
