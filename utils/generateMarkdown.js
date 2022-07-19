// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge = renderLicenseBadge(data.license);
  let link = renderLicenseLink(data.license);
  let section = renderLicenseSection(data.license);
  let markdownStr = `# ${data.title}\n\n## Description${badge}\n\n${data.description}\n\n## Table of Contents\\nn* [Installation](#installation)\n* [Usage](#usage)\n* [Credits](#credits)\n* [License](#license)\n## Installation\n\n${data.installation}\n\n## Usage\n\n${data.usage}\n\n## Contribution\n\n${data.contribution}\n\n## Tests\n\n## [License]${(link)}\n\n${section}\n\n---`
  return markdownStr;
}

module.exports = generateMarkdown;
