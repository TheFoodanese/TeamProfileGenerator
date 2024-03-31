import('inquirer').then((inquirer) => {
    // Prompt the user for manager details
    function addManager() {
        inquirer.prompt([
            {
                type: 'input',
                message: 'Enter the team manager\'s name:',
                name: 'name',
            },
            {
                type: 'input',
                message: 'Enter the team manager\'s employee ID:',
                name: 'id',
            },
            {
                type: 'input',
                message: 'Enter the team manager\'s email address:',
                name: 'email',
            },
            {
                type: 'input',
                message: 'Enter the team manager\'s office number:',
                name: 'officeNumber',
            },
        ]).then((managerData) => {
            // Create Manager object with the provided data
            const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
            // Push manager to the team array
            team.push(manager);
            // Return to main menu
            mainMenu();
        });
    }

    // Define other functions and logic here...

    // Start the application by prompting for manager details
    addManager();
}).catch((error) => {
    console.error('Error occurred while dynamically importing inquirer:', error);
});
