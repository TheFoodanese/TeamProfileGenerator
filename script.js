const inquirer = import('inquirer');
const fs = import('fs');
const Manager = import('.Manager');
const Engineer = import('.Engineer');
const Intern = import('.Intern');
const render = import('.render');

const team = [];

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter manager\'s name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter manager\'s ID:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter manager\'s email:',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter manager\'s office number:',
        }
    ]).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(manager);
        menu();
    });
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter engineer\'s name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter engineer\'s ID:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter engineer\'s email:',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter engineer\'s GitHub username:',
        }
    ]).then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        team.push(engineer);
        menu();
    });
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter intern\'s name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter intern\'s ID:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter intern\'s email:',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter intern\'s school:',
        }
    ]).then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.push(intern);
        menu();
    });
}

function menu() {
    inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
    }).then((answers) => {
        switch (answers.choice) {
            case 'Add an engineer':
                addEngineer();
                break;
            case 'Add an intern':
                addIntern();
                break;
            default:
                generateHTML();
                break;
        }
    });
}

function generateHTML() {
    const html = render(team);
    const outputPath = './output/team.html';
    fs.writeFile(outputPath, html, (err) => {
        if (err) throw err;
        console.log('HTML file successfully generated!');
    });
}

addManager();
