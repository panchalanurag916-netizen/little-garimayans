import mongoose, { Schema, Document, Model } from 'mongoose'
import bcrypt from 'bcryptjs'

export interface IAdmin extends Document {
  name:       string
  email:      string
  password:   string
  role:       'super-admin' | 'admin' | 'editor'
  lastLogin?: Date
  active:     boolean
  comparePassword(candidate: string): Promise<boolean>
}

const AdminSchema = new Schema<IAdmin>(
  {
    name:      { type: String, required: true, trim: true },
    email:     { type: String, required: true, unique: true, lowercase: true },
    password:  { type: String, required: true, select: false },
    role:      { type: String, default: 'admin', enum: ['super-admin','admin','editor'] },
    lastLogin: { type: Date },
    active:    { type: Boolean, default: true },
  },
  { timestamps: true }
)

AdminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, 12)
  next()
})

AdminSchema.methods.comparePassword = async function (candidate: string): Promise<boolean> {
  return bcrypt.compare(candidate, this.password)
}

export const Admin: Model<IAdmin> =
  mongoose.models.Admin || mongoose.model<IAdmin>('Admin', AdminSchema)
