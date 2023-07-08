import asyncHandler from 'express-async-handler';
import Competitor from '../models/competitorsModel.js';

// @desc Fetch all competitors.
// @route GET /api/competitors
// @access Public
const getCompetitors = asyncHandler(async (req, res) => {
  const competitors = await Competitor.find({});

  res.json(competitors);
});

export { getCompetitors };
