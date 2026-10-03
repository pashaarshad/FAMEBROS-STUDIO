import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ICreator extends Document {
  name: string;
  handle: string;
  niche: string;
  followerCount: string;
  avatarUrl: string;
  platform: string;
  contactEmail?: string;
  location?: string;
  isCustom?: boolean;
  createdAt: Date;
}

const CreatorSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    handle: { type: String, required: true },
    niche: { type: String, required: true },
    followerCount: { type: String, required: true },
    avatarUrl: { type: String, required: true },
    platform: { type: String, default: 'Instagram' },
    contactEmail: { type: String, default: '' },
    location: { type: String, default: 'Mumbai' },
    isCustom: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Creator: Model<ICreator> =
  mongoose.models.Creator || mongoose.model<ICreator>('Creator', CreatorSchema);

export default Creator;
