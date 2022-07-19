//Array of possible licenses
let licenseArray = [
"MIT License^^^^[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
"Apache 2.0 License^^^^[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", 
"Mozilla Public License 2.0^^^^[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)", 
"GNU GPL v3^^^^[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)", "Boost Software License 1.0^^^^[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)", 
"The Hippocratic License 2.1^^^^[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)", 
"The Unlicense^^^^[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)", "Leave License Blank"
] 

// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Leave License Blank") {
    return "";
  } else {
    for (let lBadge of licenseArray) {
      let arr = lBadge.split('^^^^')
      if (license === arr[0]) {
        return arr[1];
      }
    }
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "") {
    return ""
  } else {
 `## [License](./LICENSE)\n\nThis project uses the ${license}. More information about the license can be found via the license link above, or the badge at the top of the page. Thank you.\n\n`
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  let badge = renderLicenseBadge(data.license);
  let section = renderLicenseSection(data.license);
  let markdownStr = `# ${data.title}\n\n## Description ${badge}\n\n${data.description}\n\n## Table of Contents\\nn* [Installation](#installation)\n* [Usage](#usage)\n* [Contribution](#contribution)\n* [Tests](#tests)\n* [Credits](#credits)\n* [Questions?](#questions?)[License](#license)\n## Installation\n\n${data.installation}\n\n## Usage\n\n${data.usage}\n\n## Contribution\n\n${data.contribution}\n\n## Tests\n\n## Questions?\n\n Questions are always welcome. You can reach out to me via my email (${data.email}), or find me at my GitHub ([${data.github}](https://github.com/${data.github}))${section}---`
  return markdownStr;
}

module.exports = generateMarkdown;
