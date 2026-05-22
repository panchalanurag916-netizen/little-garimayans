import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IGallery extends Document {
  title:    string
  url:      string
  thumb?:   string
  category: string
  tags:     string[]
  type:     'image' | 'video'
  order:    number
  active:   boolean
}

const GallerySchema = new Schema<IGallery>(
  {
    title:    { type: String, required: true },
    url:      { type: String, required: true },
    thumb:    { type: String },
    category: { type: String, default: 'General' },
    tags:     [{ type: String }],
    type:     { type: String, default: 'image', enum: ['image','video'] },
    order:    { type: Number, default: 0 },
    active:   { type: Boolean, default: true },
  },
  { timestamps: true }
)

export const Gallery: Model<IGallery> =
  mongoose.models.Gallery || mongoose.model<IGallery>('Gallery', GallerySchema)
