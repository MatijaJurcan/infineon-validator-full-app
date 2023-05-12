const Pool = require("pg").Pool;
const pool = new Pool({
  user: "validator",
  host: "localhost",
  database: "api",
  password: "12345678",
  port: 5432,
});

const getSamples = async (request, response) => {
  pool.query(
    "SELECT * FROM public.samples ORDER BY id ASC;",
    (error, results) => {
      if (error) {
        throw error.stack;
      }
      response.status(200).send(results.rows);
    }
  );
};

const getInputConditions = (request, response) => {
  pool.query(
    "SELECT * FROM input_conditions ORDER BY id ASC;",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(results.rows);
    }
  );
};

const getFinalTestVectors = (request, response) => {
  sampleId = request.body.sampleId;
  pool.query(
    `SELECT * FROM final_test_vectors WHERE sample_id = ${rsampleId} ORDER BY id ASC;`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(results.rows);
    }
  );
};

const createSamples = (request, response) => {
  let newSamples = request.body;
  let queryValuesString = `INSERT INTO samples (family_name, product_name, sample_name) VALUES `;
  let lengthOfSamples = Object.keys(newSamples).length;
  for (let i = 0; i < lengthOfSamples; i++) {
    row = `('${newSamples[i].family_name}', '${newSamples[i].product_name}', '${newSamples[i].sample_name}')`;
    delimiter = i + 1 == lengthOfSamples ? ";" : ",";
    queryValuesString = queryValuesString + row + delimiter;
  }

  pool.query(queryValuesString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json({ status: "ok" });
  });
};

const createInputConditions = (request, response) => {
  let newInputConditions = request.body;
  let queryValuesString = `INSERT INTO input_conditions (parameter, minimum, maximum, time_between_points) VALUES `;
  let lengthOfInputConditions = Object.keys(newInputConditions).length;
  for (let i = 0; i < lengthOfInputConditions; i++) {
    row = `('${newInputConditions[i].parameter}', '${parseInt(
      newInputConditions[i].min
    )}', '${parseInt(newInputConditions[i].max)}', '${parseInt(
      newInputConditions[i].time_between_points
    )}')`;
    delimiter = i + 1 == lengthOfInputConditions ? ";" : ",";
    queryValuesString = queryValuesString + row + delimiter;
  }

  pool.query(queryValuesString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json({ status: "ok" });
  });
};

const createTestPointCollections = (request, response) => {
  let newTestPointCollections = request.body;
  let queryValuesString = `INSERT INTO point_collections (parameter, minimum, maximum, time_between_points) VALUES `;
  let lengthTestPointCollections = Object.keys(newTestPointCollections).length;
  for (let i = 0; i < lengthTestPointCollections; i++) {
    row = `('${newTestPointCollections[i].parameter}', '${parseInt(
      newTestPointCollections[i].min
    )}', '${parseInt(newTestPointCollections[i].max)}', '${parseInt(
      newTestPointCollections[i].time_between_points
    )}')`;
    delimiter = i + 1 == lengthTestPointCollections ? ";" : ",";
    queryValuesString = queryValuesString + row + delimiter;
  }

  pool.query(``, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json({ status: "ok" });
  });
};

const createTestVectorsModifiers = (request, response) => {
  newTestVectorsModifiers = request.body;

  pool.query(``, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json({ status: "ok" });
  });
};

module.exports = {
  getSamples,
  getInputConditions,
  getFinalTestVectors,
  createSamples,
  createInputConditions,
  createTestPointCollections,
  createTestVectorsModifiers,
};
