import mongoose from 'mongoose';

const competitorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      unique: true,
    },
    walletAddress: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Competitor = mongoose.model('Competitor', competitorSchema);

export default Competitor;
