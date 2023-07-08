import express from 'express';
import { getCompetitors } from '../controllers/competitorControllers.js';

const router = express.Router();

// @desc Fetch all users.
// @route GET /api/users
// @access Public
router.route('/').get(getCompetitors);

export default router;
