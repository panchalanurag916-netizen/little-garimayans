import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IBlogPost extends Document {
  title:       string
  slug:        string
  excerpt:     string
  content:     string
  coverImage:  string
  category:    string
  tags:        string[]
  author:      string
  published:   boolean
  featured:    boolean
  seoTitle?:   string
  seoDesc?:    string
  readTime:    number
  views:       number
  createdAt:   Date
  updatedAt:   Date
}

const BlogPostSchema = new Schema<IBlogPost>(
  {
    title:      { type: String, required: true, trim: true },
    slug:       { type: String, required: true, unique: true, lowercase: true, trim: true },
    excerpt:    { type: String, required: true, maxlength: 200 },
    content:    { type: String, required: true },
    coverImage: { type: String, default: '' },
    category:   { type: String, required: true },
    tags:       [{ type: String }],
    author:     { type: String, default: 'The Little Garimayans Team' },
    published:  { type: Boolean, default: false },
    featured:   { type: Boolean, default: false },
    seoTitle:   { type: String },
    seoDesc:    { type: String },
    readTime:   { type: Number, default: 5 },
    views:      { type: Number, default: 0 },
  },
  { timestamps: true }
)

BlogPostSchema.index({ slug: 1 })
BlogPostSchema.index({ published: 1, createdAt: -1 })
BlogPostSchema.index({ category: 1 })

export const BlogPost: Model<IBlogPost> =
  mongoose.models.BlogPost || mongoose.model<IBlogPost>('BlogPost', BlogPostSchema)
