const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileREADME = util.promisify(fs.writeFile)

// const createReadme = ({project, description, instructions, usage, contents, install, contributors, questions}) =>
// `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>README</title>
// </head>
// <body>
//         <div class="container">
//           <h1 class="display-4">the project is called ${project}</h1>
//           <h2 class="lead" >the project description is ${description}</h2>
//           <h3>follow these instructions: ${instructions}</h3>
//           <ul class="list-group">
//             <li class="list-group-item">When to use this application: ${usage}</li>
//             <li class="list-group-item">table of contents: ${contents}</li>
//             <li class="list-group-item">installation process: ${install}</li>
//             <li class="list-group-item">contributors:  ${contributors} </li>
//             <li class="list-group-item">questions: ${questions}</li>
//           </ul>
//         </div>
// </body>
// </html>`;
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
##Table of contents:
* [installation](#installation)
* [usage](#usage)
* [contributors](#contributors)
* [questions](#questions)
##Intallation:
to install the dependencies open the terminal and run:
\`\`\`${data.install}\`\`\`
##Usage
${data.usage}
##Contributors
${data.contributors}
##Questions
Questions for future development: ${data.questions}
`;
}

questions()
.then((data) => writeFileREADME('generatedREADME.md', generateMarkdown(data)))
  .then(() => console.log('completed'))
  .catch((err) => console.error(err));
  
//   .then((answers) => {
//     const READMEhtml = createReadme(answers);

//     fs.writeFile('index.html', READMEhtml, (err) =>
//       err ? console.log(err) : console.log('created professional README')
//     );
//   });
// // TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}



module.exports = generateMarkdown;
