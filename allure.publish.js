const { reportToAllure } = require("allure-service-client");
const { resolve } = require("path");

const folderPath = resolve(__dirname, `allure-results`);
console.log("Results folder path:", folderPath);

const allureDeploy = async () => {
  try {
    console.log("Starting upload...");
    
    const options = {
      project: 'redowl-ai-agent',
      resultsFolder: folderPath,
      cleanupFilesAfterUpload: false,
      host: 'http://34.173.128.142:5050',
    };

    await reportToAllure(options);

    console.log("Allure results uploaded successfully!");
  } catch (e) {
    console.error("Allure Error response:", e.message);
  }
};

module.exports = allureDeploy();
