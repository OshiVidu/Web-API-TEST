const Train = require('../models/Train');
const getTrainLocation = async (trainId, fromTime, toTime) => {
 const query = { trainId };
 if (fromTime && toTime) {
  query.timestamp = { $gte: fromTime, $lte: toTime };
 }
 return await Train.find(query);
};
module.exports = {
 getTrainLocation,
};