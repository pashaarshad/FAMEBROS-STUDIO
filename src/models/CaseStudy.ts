import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ICaseStudy extends Document {
  slug: string;
  clientName: string;
  industry: string;
  headline: string;
  metric: string;
  problem: string;
  strategy: string;
  contentCreated: string;
  shoots: string;
  influencerMarketing: string;
  ads: string;
  results: string;
  testimonialQuote: string;
  testimonialAuthor: string;
  testimonialRole: string;
  imageUrl?: string;
  videoUrl?: string;
  isCustom?: boolean;
  createdAt: Date;
}

const CaseStudySchema: Schema = new Schema(
  {
    slug: { type: String, required: true, unique: true },
    clientName: { type: String, required: true },
    industry: { type: String, required: true },
    headline: { type: String, required: true },
    metric: { type: String, required: true },
    problem: { type: String, required: true },
    strategy: { type: String, required: true },
    contentCreated: { type: String, default: '' },
    shoots: { type: String, default: '' },
    influencerMarketing: { type: String, default: '' },
    ads: { type: String, default: '' },
    results: { type: String, required: true },
    testimonialQuote: { type: String, required: true },
    testimonialAuthor: { type: String, required: true },
    testimonialRole: { type: String, required: true },
    imageUrl: { type: String, default: '' },
    videoUrl: { type: String, default: '' },
    isCustom: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const CaseStudy: Model<ICaseStudy> =
  mongoose.models.CaseStudy || mongoose.model<ICaseStudy>('CaseStudy', CaseStudySchema);

export default CaseStudy;
