import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IContact extends Document {
  name:      string
  email:     string
  phone?:    string
  subject:   string
  message:   string
  type:      'general' | 'admission' | 'franchise' | 'career' | 'media'
  status:    'new' | 'read' | 'replied'
  createdAt: Date
}

const ContactSchema = new Schema<IContact>(
  {
    name:    { type: String, required: true, trim: true },
    email:   { type: String, required: true, lowercase: true, trim: true },
    phone:   { type: String, trim: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    type:    { type: String, default: 'general', enum: ['general','admission','franchise','career','media'] },
    status:  { type: String, default: 'new', enum: ['new','read','replied'] },
  },
  { timestamps: true }
)

export const Contact: Model<IContact> =
  mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema)
