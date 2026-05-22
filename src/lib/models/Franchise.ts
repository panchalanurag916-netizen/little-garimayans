import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IFranchise extends Document {
  fullName:       string
  email:          string
  phone:          string
  city:           string
  state:          string
  budget:         string
  propertyStatus: 'owned' | 'rented' | 'looking'
  experience:     string
  message?:       string
  status:         'new' | 'contacted' | 'meeting-scheduled' | 'qualified' | 'closed' | 'lost'
  source:         string
  createdAt:      Date
  updatedAt:      Date
}

const FranchiseSchema = new Schema<IFranchise>(
  {
    fullName:       { type: String, required: true, trim: true },
    email:          { type: String, required: true, lowercase: true, trim: true },
    phone:          { type: String, required: true, trim: true },
    city:           { type: String, required: true, trim: true },
    state:          { type: String, required: true, trim: true },
    budget:         { type: String, required: true },
    propertyStatus: { type: String, required: true, enum: ['owned','rented','looking'] },
    experience:     { type: String, required: true },
    message:        { type: String },
    status:         { type: String, default: 'new', enum: ['new','contacted','meeting-scheduled','qualified','closed','lost'] },
    source:         { type: String, default: 'website' },
  },
  { timestamps: true }
)

FranchiseSchema.index({ email: 1 })
FranchiseSchema.index({ status: 1 })
FranchiseSchema.index({ state: 1, city: 1 })

export const Franchise: Model<IFranchise> =
  mongoose.models.Franchise || mongoose.model<IFranchise>('Franchise', FranchiseSchema)
