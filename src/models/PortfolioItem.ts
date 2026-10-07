import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPortfolioItem extends Document {
  title: string;
  category: string;
  clientName: string;
  thumbnailUrl: string;
  videoUrl?: string;
  description: string;
  metricLabel?: string;
  metricValue?: string;
  sections?: string[];
  isCustom?: boolean;
  createdAt: Date;
}

const PortfolioItemSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    clientName: { type: String, required: true },
    thumbnailUrl: { type: String, required: true },
    videoUrl: { type: String, default: '' },
    description: { type: String, default: '' },
    metricLabel: { type: String, default: '' },
    metricValue: { type: String, default: '' },
    sections: { type: [String], default: ['work'] },
    isCustom: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const PortfolioItem: Model<IPortfolioItem> =
  mongoose.models.PortfolioItem || mongoose.model<IPortfolioItem>('PortfolioItem', PortfolioItemSchema);

export default PortfolioItem;
