import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import connectDB from './config/db.js';
import Competitor from './models/competitorsModel.js';
import competitors from './data/competitors.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Competitor.deleteMany();
    const createdCompetitors = await Competitor.insertMany(competitors);
    console.log(createdCompetitors);

    console.log('Data Imported');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Competitor.deleteMany();
    console.log('Data Destroyed');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
