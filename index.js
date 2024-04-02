import Manager from "./challenge/starter/lib/Manager.js";
import Engineer from "./challenge/starter/lib/Engineer.js";
import Intern from "./challenge/starter/lib/Intern.js";
import inquirer from "inquirer";
import path from "path";
import fs from "fs";
import { render } from "./challenge/starter/src/page-template.js";


const __dirname = path.dirname(new URL(import.meta.url).pathname);
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const team = [];

function runApp() {
    function manager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is your name as the manager?: '
            },
            {
                type: 'input',
                name: 'managerID',
                message: 'What is your employee ID?: '
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is your email?: '
            },
            {
                type: 'input',
                name: 'managerOffice',
                message: 'What is your office number?: '
            }
        ]).then((info) => {
            const manager = new Manager(info.managerName, info.managerID, info.managerEmail, info.managerOffice);
            team.push(manager);
            makeTeam();
        });
    }

    manager();

    function makeTeam() {
        inquirer.prompt([{
            type: "list",
            message: "What kind of employee would you like to employ?: ",
            name: "addEmployee",
            choices: ["Engineer", "Intern", "Done!"]
        }]).then(function (choice) {
            switch (choice.addEmployee) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    htmlPage();
                    break;
            }
        });
    }

    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's name?: "
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the engineer's employee ID number?: "
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer's email address?: "
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is the engineer's GitHub username?: "
            }
        ]).then(info => {
            const engineer = new Engineer(info.engineerName, info.engineerId, info.engineerEmail, info.engineerGithub);
            team.push(engineer);
            makeTeam();
        });
    }

    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the intern's name?: "
            },
            {
                type: "input",
                name: "internId",
                message: "What is the intern's employee ID number?: "
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the intern's email address?: "
            },
            {
                type: "input",
                name: "internSchool",
                message: "What school does the intern attend?: "
            }
        ]).then(info => {
            const intern = new Intern(info.internName, info.internId, info.internEmail, info.internSchool);
            team.push(intern);
            makeTeam();
        });
    }

    function htmlPage() {
        console.log("All done!");
        // Ensure the output directory exists
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
        fs.writeFileSync(outputPath, render(team), (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log("Team profile page generated successfully!");
            }
        });
    }
}

runApp();
