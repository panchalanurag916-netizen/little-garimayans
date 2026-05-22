import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IEvent extends Document {
  title:       string
  description: string
  date:        Date
  endDate?:    Date
  location:    string
  coverImage?: string
  category:    string
  featured:    boolean
  published:   boolean
  registrationOpen: boolean
  maxSeats?:   number
  registrations: number
}

const EventSchema = new Schema<IEvent>(
  {
    title:        { type: String, required: true },
    description:  { type: String, required: true },
    date:         { type: Date, required: true },
    endDate:      { type: Date },
    location:     { type: String, required: true },
    coverImage:   { type: String },
    category:     { type: String, default: 'General' },
    featured:     { type: Boolean, default: false },
    published:    { type: Boolean, default: true },
    registrationOpen: { type: Boolean, default: true },
    maxSeats:     { type: Number },
    registrations:{ type: Number, default: 0 },
  },
  { timestamps: true }
)

export const Event: Model<IEvent> =
  mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema)
