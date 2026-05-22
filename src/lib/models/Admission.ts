import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IAdmission extends Document {
  studentName:   string
  dateOfBirth:   string
  program:       'playgroup' | 'nursery' | 'jr-kg' | 'sr-kg'
  parentName:    string
  parentEmail:   string
  parentPhone:   string
  address:       string
  preferredBranch: string
  message?:      string
  visitDate?:    string
  status:        'new' | 'contacted' | 'scheduled' | 'enrolled' | 'not-interested'
  source:        string
  createdAt:     Date
  updatedAt:     Date
}

const AdmissionSchema = new Schema<IAdmission>(
  {
    studentName:    { type: String, required: true, trim: true },
    dateOfBirth:    { type: String, required: true },
    program:        { type: String, required: true, enum: ['playgroup','nursery','jr-kg','sr-kg'] },
    parentName:     { type: String, required: true, trim: true },
    parentEmail:    { type: String, required: true, lowercase: true, trim: true },
    parentPhone:    { type: String, required: true, trim: true },
    address:        { type: String, required: true },
    preferredBranch:{ type: String, required: true },
    message:        { type: String },
    visitDate:      { type: String },
    status:         { type: String, default: 'new', enum: ['new','contacted','scheduled','enrolled','not-interested'] },
    source:         { type: String, default: 'website' },
  },
  { timestamps: true }
)

AdmissionSchema.index({ parentEmail: 1 })
AdmissionSchema.index({ status: 1 })
AdmissionSchema.index({ createdAt: -1 })

export const Admission: Model<IAdmission> =
  mongoose.models.Admission || mongoose.model<IAdmission>('Admission', AdmissionSchema)
