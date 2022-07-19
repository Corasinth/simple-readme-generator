let markdownStr = `# Your Project Title\n## Description\n\n## Table of Contents (Optional)\n* [Installation](#installation)\n* [Usage](#usage)\n* [Credits](#credits)\n* [License](#license)\n## Installation\n\n## Usage\n\n## Credits\n## License\n\n## Badges\n\n## Features\n\n## Contributin\n\n## Tests\n---`

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
  return `# ${data.title}`;
}

module.exports = generateMarkdown;
