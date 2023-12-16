// Map for license urls
const urls = new Map([
  ["MIT", "https://img.shields.io/badge/License-MIT-yellow.svg"],
  ["APACHE 2.0", "https://img.shields.io/badge/License-Apache_2.0-blue.svg"],
  ["GPL 3.0", "https://img.shields.io/badge/License-GPLv3-blue.svg"],
  ["BSD 3", "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg"],
]);

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${
    data.license != "None"
      ? `![License](${urls.get(data.license)})`
      : ""
  }
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  Direct any questions to [${data.username}](https://github.com/${
    data.username
  }) or email at ${data.email}.
  ${
    data.license != "None"
      ? `## License\nThis project is licensed under the ${data.license} license.`
      : ""
  }
`;
}

module.exports = generateMarkdown;
