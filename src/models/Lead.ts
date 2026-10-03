import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ILead extends Document {
  name: string;
  phone: string;
  email: string;
  businessType: string;
  message?: string;
  serviceRequested?: string;
  status: 'New' | 'Contacted' | 'Converted' | 'Closed';
  createdAt: Date;
}

const LeadSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    businessType: { type: String, default: 'General' },
    message: { type: String, default: '' },
    serviceRequested: { type: String, default: 'Social Media Growth' },
    status: {
      type: String,
      enum: ['New', 'Contacted', 'Converted', 'Closed'],
      default: 'New',
    },
  },
  { timestamps: true }
);

const Lead: Model<ILead> =
  mongoose.models.Lead || mongoose.model<ILead>('Lead', LeadSchema);

export default Lead;
