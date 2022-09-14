const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileREADME = util.promisify(fs.writeFile)

const questions = () =>
inquirer
  .prompt([
    {
      type: 'input',
      name: 'project',
      message: 'what is the name of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'describe your project',
    },
    {
      type: 'list',
      name: 'licences',
      message: 'does it have any licenses?',
      choices: ['Boost', 'Eclipse', 'GNU', 'ISC', 'none'],
    },
    
    {
      type: 'input',
      name: 'instructions',
      message: 'what are the instructions for your project',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'how is your project used?',
    },
    {
      type: 'input',
      name: 'contents',
      message: 'what is the table of contents?',
    },
    {
      type: 'input',
      name: 'install',
      message: 'how do you install your project?',
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'who contributed to the project?',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'questions about future develpment?',
    },
  ]);
  // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}
${data.description}
### License:
${data.licenses}
### Intallation:
to install the dependencies open the terminal and run:
${data.install}
### Usage:
${data.usage}
### Contributors:
${data.contributors}
### Questions:
Questions for future development: ${data.questions}
`;
}

questions()
.then((data) => writeFileREADME('generatedREADME.md', generateMarkdown(data)))
  .then(() => console.log('completed'))
  .catch((err) => console.error(err));
  
module.exports = generateMarkdown;
