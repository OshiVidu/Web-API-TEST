const trainService = require('../services/trainService');
const getTrainLocation = async (req, res, next) => {
 try {
 const { trainId, fromTime, toTime } = req.query;
 const data = await trainService.getTrainLocation(trainId, 
fromTime, toTime);
 res.status(200).json({
 status: 'success',
 data,
 });
 } catch (error) {
 next(error);
 }
};
module.exports = {
 getTrainLocation,
};