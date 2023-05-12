const fs = require("fs");

function mergeArrays(array1, array2) {
  const mergedArray = [...array1, ...array2];
  const uniqueArray = Array.from(new Set(mergedArray));
  return uniqueArray;
}

files = ["Demo.json", "L1.json", "L2.json", "M1.json", "M2.json"];
for (filename in files) {
  fs.readFile(`./${filename}`, "utf8", (err, jsonString) => {
    if (err) {
      console.log("Error reading file from disk:", err);
      return;
    }
    try {
      const projectData = JSON.parse(jsonString);
      const samplesData = projectData.samples;
      const inputConditionsData = projectData.inputConditions;
      const testPointsCollectionsData = projectData.testPointsCollections;

      inputConditionsData.foreach((inputCondition) => {
        samplesForInputCondition = [];
        testPointsCollectionsData.foreach((testPointsCollection) => {
          if (inputCondition.Id == testPointsCollection.InputConditionId) {
            samplesForInputCondition = mergeArrays(
              samplesForInputCondition,
              testPointsCollection.SampleIds
            );
          }
        });
      });
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });
}
