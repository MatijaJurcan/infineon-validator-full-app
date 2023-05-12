var express = require("express");
var router = express.Router();
const db = require("../queries");

// GET home page.
router.get("/samples", function (req, res, next) {
  db.getSamples(req, res);
});

router.get("/inputconditions", function (req, res, next) {
  db.getInputConditions(req, res);
});

router.get("/testvectors", function (req, res, next) {
  db.getFinalTestVectors(req, res);
});

router.post("/samplespost", function (req, res, next) {
  console.log("here");
  db.createSamples(req, res);
});

router.post("/inputconditions", function (req, res, next) {
  db.createInputConditions(req, res);
});

router.post("/testpoints", function (req, res, next) {
  db.createTestPointCollections(req, res);
});
router.post("/testvectorsmodifiers", function (req, res, next) {
  db.createTestVectorsModifiers(req, res);
});

module.exports = router;
