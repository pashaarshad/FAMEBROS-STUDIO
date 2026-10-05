import mongoose, { Schema, Document } from 'mongoose';

export interface IBrand extends Document {
  name: string;
  logoUrl: string;   // path like /uploads/brands/filename.png
  isLocked: boolean; // true = baseline hardcoded brand
  order: number;
  createdAt: Date;
}

const BrandSchema = new Schema<IBrand>(
  {
    name: { type: String, required: true, trim: true },
    logoUrl: { type: String, required: true },
    isLocked: { type: Boolean, default: false },
    order: { type: Number, default: 999 },
  },
  { timestamps: true }
);

export const Brand =
  mongoose.models.Brand || mongoose.model<IBrand>('Brand', BrandSchema);
