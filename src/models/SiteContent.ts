import mongoose, { Schema, Document } from 'mongoose';

export interface ISiteContent extends Document {
  section: string;      // e.g. "hero", "about", "faq"
  key: string;          // e.g. "headline", "subheadline", "body"
  value: string;        // The actual text content
  updatedAt: Date;
}

const SiteContentSchema = new Schema<ISiteContent>(
  {
    section: { type: String, required: true, trim: true },
    key: { type: String, required: true, trim: true },
    value: { type: String, required: true },
  },
  { timestamps: true }
);

// Compound unique index — each section+key pair is unique
SiteContentSchema.index({ section: 1, key: 1 }, { unique: true });

export const SiteContent =
  mongoose.models.SiteContent ||
  mongoose.model<ISiteContent>('SiteContent', SiteContentSchema);
