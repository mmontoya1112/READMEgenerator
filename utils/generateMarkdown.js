const inquirer = require('inquirer');
const fs = require('fs');

const createHTML = ({project, description, instructions, usage, contents, install, contributors, questions}) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README</title>
</head>
<body>
        <div class="container">
          <h1 class="display-4">the project is called ${project}</h1>
          <h2 class="lead" >the project description is ${description}</h2>
          <h3>follow these instructions: ${instructions}</h3>
          <ul class="list-group">
            <li class="list-group-item">When to use this application: ${usage}</li>
            <li class="list-group-item">table of contents: ${contents}</li>
            <li class="list-group-item">installation process: ${install}</li>
            <li class="list-group-item">contributors:  ${contributors} </li>
            <li class="list-group-item">questions: ${questions}</li>
          </ul>
        </div>
</body>
</html>`;
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
