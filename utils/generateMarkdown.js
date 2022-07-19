//Array of possible licenses
let licenseArray = ["MIT License:[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", "Apache 2.0 License:[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", "Mozilla Public License 2.0", "GNU GPL v3: [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)", "Boost Software License 1.0:[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)", "The Hippocratic License 2.1:[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)", "The Unlicense:[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)", "Leave License Blank"] 

// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Leave License Blank") {
    return "";
  } else {
    for (let lBadge of licenseArray) {
      let arr = lBadge.split(':')
      if (license === arr[0]) {
        return arr[1];
      }
    }
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, link) {
  if (license === "") {
    return ""
  } else {
 `## [License]${(link)}\n\n${section}\n\n`
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  let badge = renderLicenseBadge(data.license);
  let link = renderLicenseLink(data.license);
  let section = renderLicenseSection(data.license, link);
  let markdownStr = `# ${data.title}\n\n## Description${badge}\n\n${data.description}\n\n## Table of Contents\\nn* [Installation](#installation)\n* [Usage](#usage)\n* [Credits](#credits)\n* [License](#license)\n## Installation\n\n${data.installation}\n\n## Usage\n\n${data.usage}\n\n## Contribution\n\n${data.contribution}\n\n## Tests\n\n${section}---`
  return markdownStr;
}

module.exports = generateMarkdown;
