// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}
  ## Table of Contents
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${data.license != "None" ? 
    `## License
    ${data.license}`: ""
  }
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  ${data.username}
  ${data.email}

`;
}

module.exports = generateMarkdown;
